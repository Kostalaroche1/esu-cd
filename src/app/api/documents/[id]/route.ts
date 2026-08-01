import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";

type Contexte = { params: Promise<{ id: string }> };

export async function PATCH(requete: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("modifier");
  if (acces.erreur) return acces.erreur;
  const { id } = await contexte.params;
  const corps = await requete.json();
  const donnees = await prisma.documentCandidature.update({ where: { id }, data: { estValide: Boolean(corps.estValide), commentaire: corps.commentaire ? String(corps.commentaire) : null } });
  return NextResponse.json({ succes: true, message: "Document vérifié.", donnees });
}

export async function DELETE(_: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("supprimer");
  if (acces.erreur) return acces.erreur;
  try {
    const document = await prisma.documentCandidature.delete({ where: { id: (await contexte.params).id } });
    await del(document.cheminFichier);
    return NextResponse.json({ succes: true, message: "Document supprimé." });
  } catch (erreur) { return erreurApi(erreur, "La suppression du document a échoué."); }
}
