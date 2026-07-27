import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const motDePasse = await bcrypt.hash("Admin@123", 12);

  const universite = await prisma.etablissement.upsert({
    where: { id: "etab-demo" },
    update: {},
    create: {
      id: "etab-demo",
      nom: "Université de démonstration",
      sigle: "UDEMO",
      province: "Kinshasa",
      ville: "Kinshasa",
      type: "Université",
    },
  });

  const etudiant = await prisma.etudiant.upsert({
    where: { matricule: "ETU-2026-001" },
    update: {},
    create: {
      matricule: "ETU-2026-001",
      nom: "KABAMBA",
      prenom: "Aline",
      sexe: "F",
      email: "etudiant@esu.cd",
      niveauEtude: "Licence",
      filiere: "Informatique",
      anneeAcademique: "2025-2026",
      etablissementId: universite.id,
    },
  });

  await prisma.utilisateur.upsert({
    where: { email: "admin@esu.cd" },
    update: {},
    create: {
      nomComplet: "Administrateur ESU",
      email: "admin@esu.cd",
      motDePasse,
      role: "SUPER_ADMINISTRATEUR",
    },
  });

  await prisma.utilisateur.upsert({
    where: { email: "etudiant@esu.cd" },
    update: {},
    create: {
      nomComplet: "Aline KABAMBA",
      email: "etudiant@esu.cd",
      motDePasse,
      role: "ETUDIANT",
      etudiantId: etudiant.id,
    },
  });

  const programme = await prisma.programmeBourse.upsert({
    where: { code: "PB-ESU-2026" },
    update: {},
    create: {
      code: "PB-ESU-2026",
      nom: "Bourse nationale d’excellence 2026",
      description: "Programme pilote de soutien aux étudiants méritants.",
      organismeFinanceur: "Ministère de l’Enseignement supérieur et universitaire",
      montantMaximum: 1500,
      devise: "USD",
      niveauCible: "Licence et Master",
      domaineCible: "Toutes filières",
    },
  });

  const appel = await prisma.appelCandidature.upsert({
    where: { reference: "AC-2026-001" },
    update: {},
    create: {
      reference: "AC-2026-001",
      titre: "Appel à candidatures 2026",
      description: "Soumission des dossiers pour la bourse nationale d’excellence.",
      dateOuverture: new Date("2026-01-15"),
      dateCloture: new Date("2026-09-30"),
      nombrePlaces: 100,
      criteresEligibilite: "Être régulièrement inscrit et présenter un dossier complet.",
      estPublie: true,
      programmeId: programme.id,
    },
  });

  await prisma.candidature.upsert({
    where: { etudiantId_appelId: { etudiantId: etudiant.id, appelId: appel.id } },
    update: {},
    create: {
      reference: "CAN-2026-0001",
      motivation: "Je sollicite cette bourse afin de poursuivre mes études dans de bonnes conditions.",
      statut: "SOUMISE",
      dateSoumission: new Date(),
      etudiantId: etudiant.id,
      appelId: appel.id,
    },
  });

  await prisma.parametre.upsert({
    where: { cle: "nomInstitution" },
    update: { valeur: "Ministère de l’Enseignement supérieur et universitaire" },
    create: { cle: "nomInstitution", valeur: "Ministère de l’Enseignement supérieur et universitaire" },
  });

  console.log("Données initiales créées.");
  console.log("Admin: admin@esu.cd / Admin@123");
  console.log("Étudiant: etudiant@esu.cd / Admin@123");
}

main().finally(async () => prisma.$disconnect());
