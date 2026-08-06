import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { encoderVerification } from "@/lib/workflow-documents";

type Contexte = { params: Promise<{ id: string }> };
const rolesVerification = ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES"];

export async function PATCH(requete: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("modifier");
  if (acces.erreur) return acces.erreur;
  if (!rolesVerification.includes(acces.session.user.role)) return NextResponse.json({ succes: false, message: "La vérification est réservée aux gestionnaires autorisés." }, { status: 403 });
  try {
    const corps = await requete.json();
    const action = String(corps.action ?? "");
    const motif = typeof corps.motif === "string" ? corps.motif.trim() : "";
    const correspondance = { VALIDER: "VALIDE", REJETER: "REJETE", DEMANDER_REMPLACEMENT: "REMPLACEMENT_DEMANDE", REINITIALISER: "A_VERIFIER" } as const;
    const etat = correspondance[action as keyof typeof correspondance];
    if (!etat) return NextResponse.json({ succes: false, message: "Action documentaire invalide." }, { status: 422 });
    if (["REJETE", "REMPLACEMENT_DEMANDE"].includes(etat) && motif.length < 3) return NextResponse.json({ succes: false, message: "Indiquez un motif d’au moins 3 caractères." }, { status: 422 });
    const donnees = await prisma.documentCandidature.update({ where: { id: (await contexte.params).id }, data: encoderVerification(etat, motif) });
    return NextResponse.json({ succes: true, message: etat === "VALIDE" ? "Document validé." : etat === "REJETE" ? "Document rejeté." : etat === "REMPLACEMENT_DEMANDE" ? "Remplacement demandé." : "Vérification réinitialisée.", donnees });
  } catch (erreur) { return erreurApi(erreur, "La vérification du document a échoué."); }
}

export async function DELETE(_: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("modifier");
  if (acces.erreur) return acces.erreur;
  try {
    const id = (await contexte.params).id;
    const document = await prisma.documentCandidature.findUnique({ where: { id }, include: { candidature: { select: { etudiantId: true, statut: true } } } });
    if (!document) return NextResponse.json({ succes: false, message: "Document introuvable." }, { status: 404 });
    const estEtudiant = acces.session.user.role === "ETUDIANT";
    const estAdministrateur = ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"].includes(acces.session.user.role);
    const suppressionEtudiant = estEtudiant && document.candidature.etudiantId === acces.session.user.etudiantId && ["BROUILLON", "SOUMISE"].includes(document.candidature.statut) && !document.estValide;
    if (!estAdministrateur && !suppressionEtudiant) return NextResponse.json({ succes: false, message: "Vous ne pouvez pas supprimer ce document à cette étape." }, { status: 403 });
    await prisma.documentCandidature.delete({ where: { id } });
    await del(document.cheminFichier);
    return NextResponse.json({ succes: true, message: "Document supprimé." });
  } catch (erreur) { return erreurApi(erreur, "La suppression du document a échoué."); }
}
