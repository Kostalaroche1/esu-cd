import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { erreurApi, exigerAutorisation } from "@/lib/api";
import { configurationsModules, estNomModule, schemasModules, type NomModule } from "@/lib/modules-metier";
import { CLE_CHEMIN_LOGO_ESU, CLE_URL_LOGO_ESU } from "@/lib/logo-esu";
import { StatutCandidature } from "@/generated/prisma/enums";
import { genererReferenceMetier } from "@/lib/references-metier";

const clesParametresProtegees = [CLE_URL_LOGO_ESU, CLE_CHEMIN_LOGO_ESU];

type Delegue = {
  findMany(args: Record<string, unknown>): Promise<unknown[]>;
  count(args: Record<string, unknown>): Promise<number>;
  create(args: Record<string, unknown>): Promise<unknown>;
  update(args: Record<string, unknown>): Promise<unknown>;
  delete(args: Record<string, unknown>): Promise<unknown>;
  findUnique(args: Record<string, unknown>): Promise<Record<string, unknown> | null>;
};

function delegue(module: NomModule): Delegue {
  const modele = configurationsModules[module].modele;
  return (prisma as unknown as Record<string, Delegue>)[modele];
}

function porteeEtudiant(module: NomModule, etudiantId?: string | null) {
  if (!etudiantId) return {};
  if (module === "etudiants") return { id: etudiantId };
  if (module === "candidatures" || module === "attributions") return { etudiantId };
  if (module === "paiements") return { attribution: { etudiantId } };
  if (module === "evaluations") return { candidature: { etudiantId } };
  if (module === "renouvellements") return { attribution: { etudiantId } };
  if (module === "appels") return { estPublie: true };
  return {};
}

function nettoyerDonnees(module: NomModule, valeur: Record<string, unknown>) {
  const donnees = { ...valeur };
  for (const [cle, contenu] of Object.entries(donnees)) {
    if (contenu === "") donnees[cle] = null;
  }
  if (module === "candidatures" && donnees.statut === "SOUMISE") donnees.dateSoumission = new Date();
  return donnees;
}

export async function listerModule(requete: NextRequest, module: NomModule) {
  const acces = await exigerAutorisation("lire");
  if (acces.erreur) return acces.erreur;
  if (["utilisateurs", "parametres"].includes(module) && !["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"].includes(acces.session.user.role)) return NextResponse.json({ succes: false, message: "Accès réservé à l’administration." }, { status: 403 });
  try {
    const url = requete.nextUrl;
    const recherche = url.searchParams.get("recherche")?.trim() ?? "";
    const page = Math.max(1, Number(url.searchParams.get("page")) || 1);
    const taille = Math.min(100, Math.max(5, Number(url.searchParams.get("taille")) || 10));
    const configuration = configurationsModules[module];
    const filtres: Record<string, unknown>[] = [];
    if (module === "parametres") filtres.push({ cle: { notIn: clesParametresProtegees } });
    const portee = porteeEtudiant(module, acces.session.user.role === "ETUDIANT" ? acces.session.user.etudiantId : null);
    if (Object.keys(portee).length) filtres.push(portee);
    if (recherche) filtres.push({ OR: configuration.recherche.map(champ => ({ [champ]: { contains: recherche } })) });
    for (const [cle, valeur] of url.searchParams) {
      if (!["recherche", "page", "taille"].includes(cle) && valeur) filtres.push({ [cle]: valeur });
    }
    const where = filtres.length ? { AND: filtres } : {};
    const options = configuration.select ? { select: configuration.select } : configuration.include ? { include: configuration.include } : {};
    const [donnees, total] = await Promise.all([
      delegue(module).findMany({ where, ...options, orderBy: { creeLe: "desc" }, skip: (page - 1) * taille, take: taille }),
      delegue(module).count({ where }),
    ]);
    return NextResponse.json({ succes: true, donnees, pagination: { page, taille, total, pages: Math.max(1, Math.ceil(total / taille)) } });
  } catch (erreur) { return erreurApi(erreur, "Impossible de charger les données."); }
}

export async function creerDansModule(requete: NextRequest, module: NomModule) {
  const action = configurationsModules[module].actionCreation ?? "creer";
  const acces = await exigerAutorisation(action);
  if (acces.erreur) return acces.erreur;
  if (acces.session.user.role === "ETUDIANT" && module !== "candidatures") return NextResponse.json({ succes: false, message: "Action non autorisée pour un compte étudiant." }, { status: 403 });
  try {
    const analyse = schemasModules[module].safeParse(await requete.json());
    if (!analyse.success) return NextResponse.json({ succes: false, message: "Données invalides.", erreurs: analyse.error.flatten().fieldErrors }, { status: 422 });
    const donnees = nettoyerDonnees(module, analyse.data as Record<string, unknown>);
    if (module === "parametres" && clesParametresProtegees.includes(String(donnees.cle))) return NextResponse.json({ succes: false, message: "Ce paramètre technique est géré par l’interface d’identité visuelle." }, { status: 403 });
    if (module === "candidatures") donnees.reference = genererReferenceMetier("CAND");
    if (module === "appels") donnees.reference = genererReferenceMetier("APP");
    if (module === "programmes") donnees.code = genererReferenceMetier("PRG");
    if (module === "utilisateurs") {
      if (!donnees.motDePasse) return NextResponse.json({ succes: false, message: "Le mot de passe est obligatoire à la création." }, { status: 422 });
      if (donnees.role === "ETUDIANT" && !donnees.etudiantId) return NextResponse.json({ succes: false, message: "Un compte étudiant doit être associé à un étudiant." }, { status: 422 });
      if (donnees.role !== "ETUDIANT") donnees.etudiantId = null;
      donnees.motDePasse = await bcrypt.hash(String(donnees.motDePasse), 12);
    }
    if (module === "candidatures" && acces.session.user.role === "ETUDIANT") {
      donnees.etudiantId = acces.session.user.etudiantId;
      donnees.statut = "BROUILLON";
      delete donnees.scoreFinal;
      delete donnees.commentaire;
    }
    if (module === "candidatures" && !donnees.etudiantId) return NextResponse.json({ succes: false, message: "L’étudiant associé est obligatoire." }, { status: 422 });
    if (module === "candidatures" && acces.session.user.role === "ETUDIANT") {
      const maintenant = new Date();
      const appel = await prisma.appelCandidature.findFirst({ where: { id: String(donnees.appelId), estPublie: true, dateOuverture: { lte: maintenant }, dateCloture: { gte: maintenant } }, select: { id: true } });
      if (!appel) return NextResponse.json({ succes: false, message: "Cet appel n’est pas ouvert aux candidatures." }, { status: 409 });
    }
    if (module === "evaluations" && acces.session.user.role === "EVALUATEUR") donnees.evaluateurId = acces.session.user.id;
    if (module === "attributions") {
      const candidature = await prisma.candidature.findUnique({ where: { id: String(donnees.candidatureId) }, select: { statut: true, etudiantId: true } });
      if (!candidature || candidature.statut !== "RETENUE" || candidature.etudiantId !== donnees.etudiantId) return NextResponse.json({ succes: false, message: "L’attribution exige une candidature retenue du même étudiant." }, { status: 409 });
    }
    if (module === "paiements" && donnees.statut === "EFFECTUE" && !donnees.datePaiement) donnees.datePaiement = new Date();
    const resultat = await delegue(module).create({ data: donnees });
    if (module === "candidatures") {
      const candidatureId = String((resultat as Record<string, unknown>).id);
      await Promise.all([
        prisma.historiqueCandidature.create({ data: { candidatureId, nouveauStatut: "BROUILLON", utilisateurId: acces.session.user.id } }),
        prisma.journalAudit.create({ data: { action: "CREER", entite: "Candidature", entiteId: candidatureId, utilisateurId: acces.session.user.id } }),
      ]);
    }
    if (module === "evaluations") {
      const candidatureId = String(donnees.candidatureId);
      const moyenne = await prisma.evaluation.aggregate({ where: { candidatureId }, _avg: { note: true } });
      await prisma.candidature.update({ where: { id: candidatureId }, data: { statut: "EN_EVALUATION", scoreFinal: moyenne._avg.note } });
    }
    if (module === "renouvellements") {
      const statut = donnees.decision === "RENOUVELEE" ? "ACTIVE" : donnees.decision === "SUSPENDUE" ? "SUSPENDUE" : donnees.decision === "ANNULEE" ? "ANNULEE" : "TERMINEE";
      await prisma.attributionBourse.update({ where: { id: String(donnees.attributionId) }, data: { statut } });
    }
    return NextResponse.json({ succes: true, message: "Enregistrement créé.", donnees: resultat }, { status: 201 });
  } catch (erreur) { return erreurApi(erreur, "La création a échoué. Vérifiez les valeurs uniques."); }
}

export async function modifierDansModule(requete: NextRequest, module: NomModule, id: string) {
  const action = configurationsModules[module].actionModification ?? "modifier";
  const acces = await exigerAutorisation(action);
  if (acces.erreur) return acces.erreur;
  if (acces.session.user.role === "ETUDIANT" && !["etudiants", "candidatures"].includes(module)) return NextResponse.json({ succes: false, message: "Action non autorisée pour un compte étudiant." }, { status: 403 });
  try {
    const existant = await delegue(module).findUnique({ where: { id } });
    if (!existant) return NextResponse.json({ succes: false, message: "Enregistrement introuvable." }, { status: 404 });
    if (module === "parametres" && clesParametresProtegees.includes(String(existant.cle))) return NextResponse.json({ succes: false, message: "Ce paramètre technique ne peut pas être modifié directement." }, { status: 403 });
    if (acces.session.user.role === "ETUDIANT") {
      const proprietaire = module === "etudiants" ? existant.id : existant.etudiantId;
      if (proprietaire !== acces.session.user.etudiantId) return NextResponse.json({ succes: false, message: "Accès refusé." }, { status: 403 });
      if (module === "candidatures" && !["BROUILLON", "SOUMISE"].includes(String(existant.statut))) return NextResponse.json({ succes: false, message: "Cette candidature n’est plus modifiable." }, { status: 409 });
    }
    const analyse = schemasModules[module].partial().safeParse(await requete.json());
    if (!analyse.success) return NextResponse.json({ succes: false, message: "Données invalides.", erreurs: analyse.error.flatten().fieldErrors }, { status: 422 });
    const donnees = nettoyerDonnees(module, analyse.data as Record<string, unknown>);
    if (module === "candidatures" && acces.session.user.role === "ETUDIANT") {
      const champsAutorises = new Set(["appelId", "motivation", "statut"]);
      for (const cle of Object.keys(donnees)) if (!champsAutorises.has(cle)) delete donnees[cle];
    }
    if (module === "candidatures" && donnees.statut) {
      const transitions: Record<string, string[]> = { BROUILLON: ["SOUMISE", "ANNULEE"], SOUMISE: ["EN_VERIFICATION", "ANNULEE"], EN_VERIFICATION: ["ELIGIBLE", "NON_ELIGIBLE", "ANNULEE"], ELIGIBLE: ["EN_EVALUATION", "ANNULEE"], EN_EVALUATION: ["RETENUE", "REJETEE", "ANNULEE"], NON_ELIGIBLE: ["EN_VERIFICATION", "ANNULEE"], RETENUE: ["ANNULEE"], REJETEE: ["EN_EVALUATION", "ANNULEE"], ANNULEE: [] };
      if (String(donnees.statut) !== existant.statut && !transitions[String(existant.statut)]?.includes(String(donnees.statut))) return NextResponse.json({ succes: false, message: `Transition de ${existant.statut} vers ${donnees.statut} interdite.` }, { status: 409 });
      if (acces.session.user.role === "ETUDIANT" && !["SOUMISE", "ANNULEE", "BROUILLON"].includes(String(donnees.statut))) return NextResponse.json({ succes: false, message: "Ce changement de statut est réservé aux gestionnaires." }, { status: 403 });
      if (donnees.statut === "SOUMISE" && existant.statut !== "SOUMISE") {
        const requis = await prisma.documentRequisAppel.findMany({ where: { appelId: String(existant.appelId), estObligatoire: true }, select: { type: true } });
        if (requis.length) {
          const presents = await prisma.documentCandidature.findMany({ where: { candidatureId: id, type: { in: requis.map(document => document.type) }, statutVerification: { not: "REJETE" } }, select: { type: true } });
          const typesPresents = new Set(presents.map(document => document.type));
          const manquants = requis.filter(document => !typesPresents.has(document.type)).map(document => document.type.replaceAll("_", " "));
          if (manquants.length) return NextResponse.json({ succes: false, message: `Documents obligatoires manquants : ${manquants.join(", ")}.` }, { status: 409 });
        }
        donnees.dateSoumission = new Date();
      }
    }
    if (module === "utilisateurs" && donnees.motDePasse) {
      donnees.motDePasse = await bcrypt.hash(String(donnees.motDePasse), 12);
      donnees.doitChangerMotDePasse = true;
      donnees.tentativesConnexion = 0;
      donnees.verrouilleJusqua = null;
    }
    if (module === "utilisateurs") {
      const roleFinal = String(donnees.role ?? existant.role);
      const etudiantFinal = Object.hasOwn(donnees, "etudiantId") ? donnees.etudiantId : existant.etudiantId;
      if (roleFinal === "ETUDIANT" && !etudiantFinal) return NextResponse.json({ succes: false, message: "Un compte étudiant doit être associé à un étudiant." }, { status: 422 });
      if (roleFinal !== "ETUDIANT") donnees.etudiantId = null;
    }
    if (module === "paiements" && donnees.statut === "EFFECTUE" && !donnees.datePaiement) donnees.datePaiement = new Date();
    const resultat = await delegue(module).update({ where: { id }, data: donnees });
    if (module === "candidatures" && donnees.statut && donnees.statut !== existant.statut) {
      await Promise.all([
        prisma.historiqueCandidature.create({ data: { candidatureId: id, ancienStatut: existant.statut as StatutCandidature, nouveauStatut: donnees.statut as StatutCandidature, commentaire: typeof donnees.commentaire === "string" ? donnees.commentaire : null, utilisateurId: acces.session.user.id } }),
        prisma.journalAudit.create({ data: { action: "CHANGER_STATUT", entite: "Candidature", entiteId: id, details: `${existant.statut} -> ${donnees.statut}`, utilisateurId: acces.session.user.id } }),
      ]);
    }
    return NextResponse.json({ succes: true, message: "Modifications enregistrées.", donnees: resultat });
  } catch (erreur) { return erreurApi(erreur, "La modification a échoué."); }
}

export async function supprimerDansModule(module: NomModule, id: string) {
  const acces = await exigerAutorisation("supprimer");
  if (acces.erreur) return acces.erreur;
  try {
    if (module === "parametres") {
      const parametre = await delegue(module).findUnique({ where: { id } });
      if (parametre && clesParametresProtegees.includes(String(parametre.cle))) return NextResponse.json({ succes: false, message: "Ce paramètre technique ne peut pas être supprimé directement." }, { status: 403 });
    }
    await delegue(module).delete({ where: { id } });
    return NextResponse.json({ succes: true, message: "Enregistrement supprimé." });
  } catch (erreur) { return erreurApi(erreur, "Suppression impossible : cet enregistrement est encore utilisé."); }
}

export function moduleDepuisParametre(ressource: string) {
  return estNomModule(ressource) ? ressource : null;
}
