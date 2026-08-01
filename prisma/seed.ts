import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../src/generated/prisma/client";

const url = process.env.DATABASE_URL;
const email = process.env.ADMIN_INITIAL_EMAIL;
const nom = process.env.ADMIN_INITIAL_NOM;
const motDePasseInitial = process.env.ADMIN_INITIAL_MOT_DE_PASSE;

if (!url || !email || !nom || !motDePasseInitial) {
  throw new Error("DATABASE_URL, ADMIN_INITIAL_NOM, ADMIN_INITIAL_EMAIL et ADMIN_INITIAL_MOT_DE_PASSE sont obligatoires pour le seed.");
}
if (motDePasseInitial.length < 12) throw new Error("ADMIN_INITIAL_MOT_DE_PASSE doit contenir au moins 12 caractères.");

const emailAdmin = email;
const nomAdmin = nom;
const motDePasseAdmin = motDePasseInitial;

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(url) });

async function initialiser() {
  const motDePasse = await bcrypt.hash(motDePasseAdmin, 12);
  await prisma.utilisateur.upsert({
    where: { email: emailAdmin },
    update: { nomComplet: nomAdmin, motDePasse, role: "SUPER_ADMINISTRATEUR", estActif: true },
    create: { nomComplet: nomAdmin, email: emailAdmin, motDePasse, role: "SUPER_ADMINISTRATEUR" },
  });
  await prisma.parametre.upsert({
    where: { cle: "nomInstitution" },
    update: {},
    create: { cle: "nomInstitution", valeur: "Ministère de l’Enseignement supérieur et universitaire" },
  });
  console.info(`Compte administrateur initialisé pour ${emailAdmin}.`);
}

initialiser().catch(erreur => { console.error(erreur); process.exitCode = 1; }).finally(async () => prisma.$disconnect());
