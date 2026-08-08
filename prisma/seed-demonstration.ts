import "dotenv/config";
import bcrypt from "bcryptjs";
import { put } from "@vercel/blob";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../src/generated/prisma/client";
import type { RoleUtilisateur, StatutCandidature, TypeDocument } from "../src/generated/prisma/client";
import { creerConfigurationMariaDb } from "../src/lib/configuration-base-donnees";

const url = process.env.DATABASE_URL;
const motDePasseDemo = process.env.MOT_DE_PASSE_ETUDIANTS_DEMO;
if (!url) throw new Error("DATABASE_URL est obligatoire.");
if (!motDePasseDemo || motDePasseDemo.length < 12) throw new Error("MOT_DE_PASSE_ETUDIANTS_DEMO doit contenir au moins 12 caractères.");
const motDePasseEtudiants = motDePasseDemo;

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(creerConfigurationMariaDb(url)) });
const maintenant = new Date();
const jour = 24 * 60 * 60 * 1000;
const dateRelative = (decalage: number) => new Date(maintenant.getTime() + decalage * jour);

const etablissementsDemo = [
  ["Université de Kinshasa", "UNIKIN", "Kinshasa", "Kinshasa"],
  ["Université Protestante au Congo", "UPC", "Kinshasa", "Kinshasa"],
  ["Université de Lubumbashi", "UNILU", "Haut-Katanga", "Lubumbashi"],
  ["Université de Kisangani", "UNIKIS", "Tshopo", "Kisangani"],
  ["Université Catholique de Bukavu", "UCB", "Sud-Kivu", "Bukavu"],
  ["Université de Mbuji-Mayi", "UM", "Kasaï-Oriental", "Mbuji-Mayi"],
] as const;

const etudiantsDemo = [
  ["Gabriel", "KOSTA", "LAROCHE", "M", "Kinshasa", "Informatique de gestion", "L2 LMD"],
  ["Aline", "KABAMBA", "MUTOMBO", "F", "Haut-Katanga", "Médecine", "L1 LMD"],
  ["Grâce", "MBUYI", "KALALA", "F", "Kasaï-Oriental", "Droit", "L2 LMD"],
  ["Junior", "KASONGO", "ILUNGA", "M", "Tshopo", "Génie civil", "L3 LMD"],
  ["Merveille", "CIRHUZA", "BIRINDWA", "F", "Sud-Kivu", "Sciences économiques", "L2 LMD"],
  ["Patrick", "TSHIBANGU", "MUKENDI", "M", "Kasaï-Central", "Agronomie", "L1 LMD"],
  ["Esther", "LUKUSA", "KAPINGA", "F", "Lualaba", "Santé publique", "L3 LMD"],
  ["David", "MUKENDI", "KAZADI", "M", "Kasaï-Oriental", "Mathématiques", "L2 LMD"],
  ["Naomie", "BILENGA", "MULUMBA", "F", "Kinshasa", "Communication", "L1 LMD"],
  ["Samuel", "BAHATI", "KAHINDO", "M", "Nord-Kivu", "Sciences environnementales", "L2 LMD"],
  ["Déborah", "MASIKA", "KAVIRA", "F", "Nord-Kivu", "Informatique", "L3 LMD"],
  ["Moïse", "KANKU", "MALANGU", "M", "Kwilu", "Électromécanique", "L2 LMD"],
] as const;

async function obtenirEtablissement(nom: string, sigle: string, province: string, ville: string) {
  const existant = await prisma.etablissement.findFirst({ where: { nom } });
  if (existant) return prisma.etablissement.update({ where: { id: existant.id }, data: { sigle, province, ville, type: "Université", estActif: true } });
  return prisma.etablissement.create({ data: { nom, sigle, province, ville, type: "Université", estActif: true } });
}

async function exigerUtilisateur(role: RoleUtilisateur) {
  const utilisateur = await prisma.utilisateur.findFirst({ where: { role, estActif: true }, orderBy: { creeLe: "asc" } });
  if (!utilisateur) throw new Error(`Créez d’abord un compte actif ayant le rôle ${role}. Le seed de démonstration ne crée pas les comptes du personnel.`);
  return utilisateur;
}

function contenuPdf(titre: string, contenu: string) {
  const nettoyer = (valeur: string) => valeur.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[()\\]/g, " ").slice(0, 120);
  const texte = `BT /F1 18 Tf 60 760 Td (${nettoyer(titre)}) Tj /F1 11 Tf 0 -35 Td (${nettoyer(contenu)}) Tj ET`;
  const objets = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >> endobj",
    `4 0 obj << /Length ${Buffer.byteLength(texte)} >> stream\n${texte}\nendstream endobj`,
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];
  let pdf = "%PDF-1.4\n";
  const positions = [0];
  for (const objet of objets) { positions.push(Buffer.byteLength(pdf)); pdf += `${objet}\n`; }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 6\n0000000000 65535 f \n${positions.slice(1).map(position => String(position).padStart(10, "0") + " 00000 n ").join("\n")}\ntrailer << /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf);
}

async function televerserPdf(chemin: string, titre: string, contenu: string) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  return put(chemin, contenuPdf(titre, contenu), { access: "private", addRandomSuffix: false, allowOverwrite: true, contentType: "application/pdf" });
}

async function initialiser() {
  console.info("Initialisation des données fictives de démonstration…");
  const [superAdmin, administrateur, gestionnaire, evaluateur, comptable] = await Promise.all([
    exigerUtilisateur("SUPER_ADMINISTRATEUR"), exigerUtilisateur("ADMINISTRATEUR"), exigerUtilisateur("GESTIONNAIRE_BOURSES"), exigerUtilisateur("EVALUATEUR"), exigerUtilisateur("COMPTABLE"),
  ]);
  void administrateur; void comptable;

  const etablissements = [];
  for (const valeurs of etablissementsDemo) etablissements.push(await obtenirEtablissement(valeurs[0], valeurs[1], valeurs[2], valeurs[3]));

  const programmes = [
    await prisma.programmeBourse.upsert({ where: { code: "DEMO-PRG-EXCELLENCE" }, update: { estActif: true }, create: { code: "DEMO-PRG-EXCELLENCE", nom: "Bourse nationale d’excellence académique", description: "Soutien fictif aux étudiants présentant d’excellents résultats académiques.", organismeFinanceur: "Fonds national fictif pour l’éducation", montantMaximum: 2400, devise: "USD", niveauCible: "Licence et Master", domaineCible: "Toutes filières", estActif: true } }),
    await prisma.programmeBourse.upsert({ where: { code: "DEMO-PRG-STIM" }, update: { estActif: true }, create: { code: "DEMO-PRG-STIM", nom: "Bourse sciences, technologies et innovation", description: "Programme fictif destiné aux filières scientifiques et technologiques prioritaires.", organismeFinanceur: "Partenariat universitaire fictif", montantMaximum: 3000, devise: "USD", niveauCible: "Licence", domaineCible: "STIM", estActif: true } }),
    await prisma.programmeBourse.upsert({ where: { code: "DEMO-PRG-SOCIAL" }, update: { estActif: true }, create: { code: "DEMO-PRG-SOCIAL", nom: "Appui social aux étudiants vulnérables", description: "Aide fictive fondée sur la situation sociale et la continuité du parcours académique.", organismeFinanceur: "Programme social fictif de l’ESU", montantMaximum: 1800, devise: "USD", niveauCible: "Licence", domaineCible: "Toutes filières", estActif: true } }),
  ];

  const appelsDonnees = [
    ["DEMO-APP-2026-OUVERT", "Appel national 2026-2027 — Excellence", programmes[0].id, -20, 40, true, 120],
    ["DEMO-APP-2026-STIM", "Appel 2026-2027 — Sciences et innovation", programmes[1].id, -10, 55, true, 80],
    ["DEMO-APP-2026-CLOTURE", "Appel social 2025-2026 — Session clôturée", programmes[2].id, -180, -90, true, 150],
    ["DEMO-APP-2027-A-VENIR", "Appel national 2027 — Préparation", programmes[0].id, 60, 120, false, 100],
  ] as const;
  const appels = [];
  for (const [reference, titre, programmeId, ouverture, cloture, estPublie, nombrePlaces] of appelsDonnees) {
    appels.push(await prisma.appelCandidature.upsert({ where: { reference }, update: { titre, dateOuverture: dateRelative(ouverture), dateCloture: dateRelative(cloture), estPublie, nombrePlaces }, create: { reference, titre, description: "Appel fictif créé pour la démonstration et les captures de la monographie.", dateOuverture: dateRelative(ouverture), dateCloture: dateRelative(cloture), nombrePlaces, criteresEligibilite: "Être régulièrement inscrit dans un établissement supérieur en RDC et fournir les pièces obligatoires.", estPublie, programmeId } }));
  }

  const typesRequis: TypeDocument[] = ["CARTE_IDENTITE", "ATTESTATION_INSCRIPTION", "RELEVE_NOTES", "LETTRE_MOTIVATION"];
  const criteres = [
    ["Résultats académiques", "Qualité et régularité des résultats obtenus.", 50, 100],
    ["Motivation et projet d’études", "Cohérence de la motivation avec le programme sollicité.", 30, 100],
    ["Situation sociale", "Appréciation des besoins sociaux documentés.", 20, 100],
  ] as const;
  for (const appel of appels.slice(0, 3)) {
    for (const type of typesRequis) await prisma.documentRequisAppel.upsert({ where: { appelId_type: { appelId: appel.id, type } }, update: { estObligatoire: true }, create: { appelId: appel.id, type, estObligatoire: true } });
    for (const [libelle, description, ponderation, noteMaximale] of criteres) await prisma.critereEvaluation.upsert({ where: { appelId_libelle: { appelId: appel.id, libelle } }, update: { description, ponderation, noteMaximale }, create: { appelId: appel.id, libelle, description, ponderation, noteMaximale } });
  }

  const empreinte = await bcrypt.hash(motDePasseEtudiants, 12);
  const etudiants = [];
  for (let index = 0; index < etudiantsDemo.length; index++) {
    const [prenom, nom, postnom, sexe, province, filiere, niveauEtude] = etudiantsDemo[index];
    const email = `${prenom.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}@esu.cd`;
    const matricule = `DEMO-ETU-${String(index + 1).padStart(3, "0")}`;
    let etudiant = await prisma.etudiant.findUnique({ where: { matricule } });
    if (!etudiant) etudiant = await prisma.etudiant.create({ data: { matricule, nom, postnom, prenom, sexe, dateNaissance: new Date(2000 + index % 5, index % 12, 5 + index), telephone: `+243 970 000 ${String(index + 1).padStart(3, "0")}`, email, adresse: `${index + 1}, avenue de la Démonstration`, provinceOrigine: province, niveauEtude, filiere, anneeAcademique: "2026-2027", etablissementId: etablissements[index % etablissements.length].id, estActif: true } });
    const compteExistant = await prisma.utilisateur.findUnique({ where: { email } });
    if (compteExistant && compteExistant.etudiantId !== etudiant.id) throw new Error(`L’adresse ${email} existe déjà et appartient à un autre profil. Aucun compte n’a été modifié.`);
    if (!compteExistant) await prisma.utilisateur.create({ data: { nomComplet: `${prenom} ${postnom} ${nom}`, email, motDePasse: empreinte, role: "ETUDIANT", etudiantId: etudiant.id, estActif: true } });
    etudiants.push(etudiant);
  }

  const statuts: StatutCandidature[] = ["BROUILLON", "SOUMISE", "EN_VERIFICATION", "ELIGIBLE", "NON_ELIGIBLE", "EN_EVALUATION", "RETENUE", "REJETEE", "RETENUE", "EN_EVALUATION", "ANNULEE", "SOUMISE"];
  for (let index = 0; index < etudiants.length; index++) {
    const etudiant = etudiants[index];
    const appel = index < 8 ? appels[0] : appels[1];
    const statut = statuts[index];
    const reference = `DEMO-CAND-${String(index + 1).padStart(3, "0")}`;
    const candidatureExistante = await prisma.candidature.findFirst({ where: { OR: [{ reference }, { etudiantId: etudiant.id, appelId: appel.id }] } });
    const candidature = candidatureExistante
      ? await prisma.candidature.update({ where: { id: candidatureExistante.id }, data: { motivation: `Je souhaite bénéficier de cette bourse fictive afin de poursuivre ma formation en ${etudiant.filiere}. Mon projet vise à contribuer au développement de la République démocratique du Congo.`, statut, dateSoumission: statut === "BROUILLON" ? null : dateRelative(-12 + index), commentaire: statut === "NON_ELIGIBLE" ? "Une pièce obligatoire doit être régularisée." : null } })
      : await prisma.candidature.create({ data: { reference, motivation: `Je souhaite bénéficier de cette bourse fictive afin de poursuivre ma formation en ${etudiant.filiere}. Mon projet vise à contribuer au développement de la République démocratique du Congo.`, statut, dateSoumission: statut === "BROUILLON" ? null : dateRelative(-12 + index), commentaire: statut === "NON_ELIGIBLE" ? "Une pièce obligatoire doit être régularisée." : null, etudiantId: etudiant.id, appelId: appel.id } });

    const compte = await prisma.utilisateur.findUniqueOrThrow({ where: { email: etudiant.email! } });
    const historique = await prisma.historiqueCandidature.findFirst({ where: { candidatureId: candidature.id, nouveauStatut: statut } });
    if (!historique) await prisma.historiqueCandidature.create({ data: { candidatureId: candidature.id, nouveauStatut: statut, commentaire: "État fictif préparé pour la démonstration.", utilisateurId: index < 3 ? compte.id : gestionnaire.id } });

    if (statut !== "BROUILLON" && process.env.BLOB_READ_WRITE_TOKEN) {
      for (const type of typesRequis) {
        const documentExistant = await prisma.documentCandidature.findFirst({ where: { candidatureId: candidature.id, type } });
        if (!documentExistant) {
          const nomFichier = `${type.toLowerCase()}-${reference.toLowerCase()}.pdf`;
          const blob = await televerserPdf(`demonstration/candidatures/${reference}/${nomFichier}`, `Document ${type}`, `Pièce fictive de démonstration — ${etudiant.prenom} ${etudiant.nom}`);
          if (blob) {
            const estRejete = statut === "NON_ELIGIBLE" && type === "ATTESTATION_INSCRIPTION";
            const estValide = !estRejete && ["ELIGIBLE", "EN_EVALUATION", "RETENUE", "REJETEE"].includes(statut);
            await prisma.documentCandidature.create({ data: { candidatureId: candidature.id, type, nomFichier, cheminFichier: blob.pathname, typeMime: "application/pdf", tailleOctets: contenuPdf(type, reference).length, statutVerification: estRejete ? "REJETE" : estValide ? "VALIDE" : "A_VERIFIER", estValide, motifVerification: estRejete ? "Attestation fictive non conforme : document expiré." : null, verifieParId: estRejete || estValide ? gestionnaire.id : null, verifieLe: estRejete || estValide ? dateRelative(-4) : null } });
          }
        }
      }
    }

    if (["EN_EVALUATION", "RETENUE", "REJETEE"].includes(statut)) {
      const terminee = ["RETENUE", "REJETEE"].includes(statut);
      const noteFinale = statut === "REJETEE" ? 54 : 84 - index % 4;
      const evaluation = await prisma.evaluation.upsert({ where: { candidatureId_evaluateurId: { candidatureId: candidature.id, evaluateurId: evaluateur.id } }, update: { statut: terminee ? "TERMINEE" : "EN_COURS", note: terminee ? noteFinale : null, decision: terminee ? (statut === "REJETEE" ? "DEFAVORABLE" : "FAVORABLE") : null, commentaire: terminee ? "Évaluation fictive complète fondée sur les critères configurés." : "Évaluation fictive en cours.", dateEcheance: dateRelative(10) }, create: { candidatureId: candidature.id, evaluateurId: evaluateur.id, statut: terminee ? "TERMINEE" : "EN_COURS", note: terminee ? noteFinale : null, decision: terminee ? (statut === "REJETEE" ? "DEFAVORABLE" : "FAVORABLE") : null, commentaire: terminee ? "Évaluation fictive complète fondée sur les critères configurés." : "Évaluation fictive en cours.", dateEcheance: dateRelative(10) } });
      if (terminee) {
        const criteresAppel = await prisma.critereEvaluation.findMany({ where: { appelId: appel.id }, orderBy: { creeLe: "asc" } });
        for (let critereIndex = 0; critereIndex < criteresAppel.length; critereIndex++) await prisma.noteCritereEvaluation.upsert({ where: { evaluationId_critereId: { evaluationId: evaluation.id, critereId: criteresAppel[critereIndex].id } }, update: { note: Math.max(40, noteFinale - critereIndex * 3) }, create: { evaluationId: evaluation.id, critereId: criteresAppel[critereIndex].id, note: Math.max(40, noteFinale - critereIndex * 3), commentaire: "Note fictive de démonstration." } });
        await prisma.candidature.update({ where: { id: candidature.id }, data: { scoreFinal: noteFinale } });
        const typeDecision = statut === "RETENUE" ? "ACCEPTEE" : "REJETEE";
        await prisma.decisionCandidature.upsert({ where: { candidatureId: candidature.id }, update: { type: typeDecision, justification: statut === "RETENUE" ? "Dossier complet et score supérieur au seuil de sélection." : "Score inférieur au seuil fixé pour cet appel.", decideurId: superAdmin.id }, create: { candidatureId: candidature.id, type: typeDecision, justification: statut === "RETENUE" ? "Dossier complet et score supérieur au seuil de sélection." : "Score inférieur au seuil fixé pour cet appel.", decideurId: superAdmin.id } });
      }
    }

    if (statut === "RETENUE") {
      const referenceAttribution = `DEMO-ATTR-${String(index + 1).padStart(3, "0")}`;
      const attribution = await prisma.attributionBourse.upsert({ where: { candidatureId: candidature.id }, update: { statut: index === 8 ? "SUSPENDUE" : "ACTIVE" }, create: { reference: referenceAttribution, montantAccorde: 2400, devise: "USD", dateDebut: dateRelative(-60), dateFin: dateRelative(305), statut: index === 8 ? "SUSPENDUE" : "ACTIVE", candidatureId: candidature.id, etudiantId: etudiant.id } });
      for (let tranche = 1; tranche <= 4; tranche++) {
        const effectue = tranche <= (index === 6 ? 2 : 1);
        await prisma.paiement.upsert({ where: { reference: `DEMO-PAY-${String(index + 1).padStart(3, "0")}-${tranche}` }, update: {}, create: { reference: `DEMO-PAY-${String(index + 1).padStart(3, "0")}-${tranche}`, periode: `Tranche ${tranche}/4`, montant: 600, devise: "USD", datePrevue: dateRelative(-30 + tranche * 45), datePaiement: effectue ? dateRelative(-25 + tranche * 45) : null, statut: effectue ? "EFFECTUE" : "PREVU", modePaiement: effectue ? "Virement bancaire" : null, attributionId: attribution.id } });
      }
      if (index === 8) await prisma.renouvellement.upsert({ where: { attributionId_anneeAcademique: { attributionId: attribution.id, anneeAcademique: "2026-2027" } }, update: {}, create: { attributionId: attribution.id, anneeAcademique: "2026-2027", decision: "SUSPENDUE", commentaire: "Suspension fictive en attente de régularisation académique.", dateDebutSuspension: dateRelative(-5), dateFinSuspension: dateRelative(25) } });
    }

    const notification = await prisma.notification.findFirst({ where: { utilisateurId: compte.id, titre: `Démonstration — ${reference}` } });
    if (!notification) await prisma.notification.create({ data: { utilisateurId: compte.id, titre: `Démonstration — ${reference}`, message: `Votre candidature fictive est au statut ${statut.replaceAll("_", " ")}.`, lien: "/candidatures", estLue: index % 3 === 0 } });
  }

  const audit = await prisma.journalAudit.findFirst({ where: { action: "SEED_DEMONSTRATION", entite: "Systeme" } });
  if (!audit) await prisma.journalAudit.create({ data: { action: "SEED_DEMONSTRATION", entite: "Systeme", details: "Création non destructive des données fictives destinées aux captures.", utilisateurId: superAdmin.id } });
  console.info(`Démonstration prête : ${etudiants.length} étudiants fictifs, ${programmes.length} programmes et ${appels.length} appels.`);
  if (!process.env.BLOB_READ_WRITE_TOKEN) console.warn("BLOB_READ_WRITE_TOKEN absent : les données ont été créées, mais aucun PDF fictif n’a été téléversé.");
  console.info("Les comptes du personnel et tous les mots de passe existants ont été conservés.");
}

initialiser().catch(erreur => { console.error(erreur); process.exitCode = 1; }).finally(async () => prisma.$disconnect());
