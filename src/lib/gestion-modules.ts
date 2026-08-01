import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { erreurApi, exigerAutorisation } from "@/lib/api";
import { configurationsModules, estNomModule, schemasModules, type NomModule } from "@/lib/modules-metier";

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
    if (module === "utilisateurs") {
      if (!donnees.motDePasse) return NextResponse.json({ succes: false, message: "Le mot de passe est obligatoire à la création." }, { status: 422 });
      donnees.motDePasse = await bcrypt.hash(String(donnees.motDePasse), 12);
    }
    if (module === "candidatures" && acces.session.user.role === "ETUDIANT") donnees.etudiantId = acces.session.user.etudiantId;
    if (module === "evaluations" && acces.session.user.role === "EVALUATEUR") donnees.evaluateurId = acces.session.user.id;
    if (module === "attributions") {
      const candidature = await prisma.candidature.findUnique({ where: { id: String(donnees.candidatureId) }, select: { statut: true, etudiantId: true } });
      if (!candidature || candidature.statut !== "RETENUE" || candidature.etudiantId !== donnees.etudiantId) return NextResponse.json({ succes: false, message: "L’attribution exige une candidature retenue du même étudiant." }, { status: 409 });
    }
    if (module === "paiements" && donnees.statut === "EFFECTUE" && !donnees.datePaiement) donnees.datePaiement = new Date();
    const resultat = await delegue(module).create({ data: donnees });
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
    if (acces.session.user.role === "ETUDIANT") {
      const proprietaire = module === "etudiants" ? existant.id : existant.etudiantId;
      if (proprietaire !== acces.session.user.etudiantId) return NextResponse.json({ succes: false, message: "Accès refusé." }, { status: 403 });
      if (module === "candidatures" && !["BROUILLON", "SOUMISE"].includes(String(existant.statut))) return NextResponse.json({ succes: false, message: "Cette candidature n’est plus modifiable." }, { status: 409 });
    }
    const analyse = schemasModules[module].partial().safeParse(await requete.json());
    if (!analyse.success) return NextResponse.json({ succes: false, message: "Données invalides.", erreurs: analyse.error.flatten().fieldErrors }, { status: 422 });
    const donnees = nettoyerDonnees(module, analyse.data as Record<string, unknown>);
    if (module === "candidatures" && donnees.statut) {
      const transitions: Record<string, string[]> = { BROUILLON: ["SOUMISE", "ANNULEE"], SOUMISE: ["EN_VERIFICATION", "ANNULEE"], EN_VERIFICATION: ["ELIGIBLE", "NON_ELIGIBLE", "ANNULEE"], ELIGIBLE: ["EN_EVALUATION", "ANNULEE"], EN_EVALUATION: ["RETENUE", "REJETEE", "ANNULEE"], NON_ELIGIBLE: ["EN_VERIFICATION", "ANNULEE"], RETENUE: ["ANNULEE"], REJETEE: ["EN_EVALUATION", "ANNULEE"], ANNULEE: [] };
      if (String(donnees.statut) !== existant.statut && !transitions[String(existant.statut)]?.includes(String(donnees.statut))) return NextResponse.json({ succes: false, message: `Transition de ${existant.statut} vers ${donnees.statut} interdite.` }, { status: 409 });
      if (acces.session.user.role === "ETUDIANT" && !["SOUMISE", "ANNULEE", "BROUILLON"].includes(String(donnees.statut))) return NextResponse.json({ succes: false, message: "Ce changement de statut est réservé aux gestionnaires." }, { status: 403 });
    }
    if (module === "utilisateurs" && donnees.motDePasse) donnees.motDePasse = await bcrypt.hash(String(donnees.motDePasse), 12);
    if (module === "paiements" && donnees.statut === "EFFECTUE" && !donnees.datePaiement) donnees.datePaiement = new Date();
    const resultat = await delegue(module).update({ where: { id }, data: donnees });
    return NextResponse.json({ succes: true, message: "Modifications enregistrées.", donnees: resultat });
  } catch (erreur) { return erreurApi(erreur, "La modification a échoué."); }
}

export async function supprimerDansModule(module: NomModule, id: string) {
  const acces = await exigerAutorisation("supprimer");
  if (acces.erreur) return acces.erreur;
  try {
    await delegue(module).delete({ where: { id } });
    return NextResponse.json({ succes: true, message: "Enregistrement supprimé." });
  } catch (erreur) { return erreurApi(erreur, "Suppression impossible : cet enregistrement est encore utilisé."); }
}

export function moduleDepuisParametre(ressource: string) {
  return estNomModule(ressource) ? ressource : null;
}
