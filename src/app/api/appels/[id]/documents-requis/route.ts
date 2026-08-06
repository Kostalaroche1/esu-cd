import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { TypeDocument } from "@/generated/prisma/enums";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";

type Contexte = { params: Promise<{ id: string }> };
const schema = z.object({ types: z.array(z.nativeEnum(TypeDocument)).max(Object.keys(TypeDocument).length) });

export async function GET(_: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("lire");
  if (acces.erreur) return acces.erreur;
  const donnees = await prisma.documentRequisAppel.findMany({ where: { appelId: (await contexte.params).id }, orderBy: { type: "asc" } });
  return NextResponse.json({ succes: true, donnees });
}

export async function PUT(requete: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("modifier");
  if (acces.erreur) return acces.erreur;
  if (!["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES"].includes(acces.session.user.role)) return NextResponse.json({ succes: false, message: "Action réservée à la gestion des bourses." }, { status: 403 });
  try {
    const analyse = schema.safeParse(await requete.json());
    if (!analyse.success) return NextResponse.json({ succes: false, message: "Liste de documents invalide." }, { status: 422 });
    const appelId = (await contexte.params).id;
    await prisma.$transaction(async transaction => {
      await transaction.documentRequisAppel.deleteMany({ where: { appelId } });
      if (analyse.data.types.length) await transaction.documentRequisAppel.createMany({ data: analyse.data.types.map(type => ({ appelId, type })) });
      await transaction.journalAudit.create({ data: { action: "CONFIGURER_DOCUMENTS_REQUIS", entite: "AppelCandidature", entiteId: appelId, details: analyse.data.types.join(","), utilisateurId: acces.session.user.id } });
    });
    return NextResponse.json({ succes: true, message: "Documents obligatoires enregistrés." });
  } catch (erreur) { return erreurApi(erreur, "Impossible de configurer les documents obligatoires."); }
}
