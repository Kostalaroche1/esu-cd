import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { TypeDocument } from "@/generated/prisma/enums";
import { encoderVerification } from "@/lib/workflow-documents";

const typesAcceptes = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);
type Contexte = { params: Promise<{ id: string }> };

async function candidatureAccessible(id: string, etudiantId?: string | null) {
  return prisma.candidature.findFirst({ where: { id, ...(etudiantId ? { etudiantId } : {}) }, select: { id: true, statut: true } });
}

export async function GET(_: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("lire");
  if (acces.erreur) return acces.erreur;
  if (acces.session.user.role === "COMPTABLE") return NextResponse.json({ succes: false, message: "Les pièces privées des candidatures ne sont pas accessibles à la comptabilité." }, { status: 403 });
  const { id } = await contexte.params;
  const candidature = await candidatureAccessible(id, acces.session.user.role === "ETUDIANT" ? acces.session.user.etudiantId : null);
  if (!candidature) return NextResponse.json({ succes: false, message: "Candidature introuvable." }, { status: 404 });
  const donnees = await prisma.documentCandidature.findMany({ where: { candidatureId: id }, include: { verifiePar: { select: { nomComplet: true } } }, orderBy: { creeLe: "desc" } });
  return NextResponse.json({ succes: true, donnees });
}

export async function POST(requete: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("creer");
  if (acces.erreur) return acces.erreur;
  try {
    const { id } = await contexte.params;
    const candidature = await candidatureAccessible(id, acces.session.user.role === "ETUDIANT" ? acces.session.user.etudiantId : null);
    if (!candidature) return NextResponse.json({ succes: false, message: "Candidature introuvable." }, { status: 404 });
    if (acces.session.user.role === "ETUDIANT" && !["BROUILLON", "SOUMISE"].includes(candidature.statut)) return NextResponse.json({ succes: false, message: "Le dépôt de documents est fermé pour ce dossier." }, { status: 409 });
    const formulaire = await requete.formData();
    const fichier = formulaire.get("fichier");
    const type = String(formulaire.get("type") ?? "");
    if (!(fichier instanceof File) || !typesAcceptes.has(fichier.type) || fichier.size > 10 * 1024 * 1024) return NextResponse.json({ succes: false, message: "Fichier PDF ou image requis, limité à 10 Mo." }, { status: 422 });
    if (!Object.values(TypeDocument).includes(type as TypeDocument)) return NextResponse.json({ succes: false, message: "Type de document invalide." }, { status: 422 });
    const nomSecurise = fichier.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const blob = await put(`candidatures/${id}/${nomSecurise}`, fichier, { access: "private", addRandomSuffix: true, contentType: fichier.type });
    const verification = encoderVerification("A_VERIFIER");
    const document = await prisma.documentCandidature.create({ data: { candidatureId: id, type: type as TypeDocument, nomFichier: fichier.name, cheminFichier: blob.pathname, typeMime: fichier.type, tailleOctets: fichier.size, ...verification } });
    return NextResponse.json({ succes: true, message: "Document téléversé.", donnees: document }, { status: 201 });
  } catch (erreur) { return erreurApi(erreur, "Le téléversement a échoué. Vérifiez BLOB_READ_WRITE_TOKEN."); }
}
