import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";

type Contexte = { params: Promise<{ id: string }> };
const schema = z.object({ criteres: z.array(z.object({ libelle: z.string().trim().min(2), description: z.string().trim().optional().nullable(), ponderation: z.coerce.number().positive(), noteMaximale: z.coerce.number().positive() })).min(1) });

export async function GET(_: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("lire"); if (acces.erreur) return acces.erreur;
  const donnees = await prisma.critereEvaluation.findMany({ where: { appelId: (await contexte.params).id }, orderBy: { creeLe: "asc" } });
  return NextResponse.json({ succes: true, donnees });
}

export async function PUT(requete: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("parametrer"); if (acces.erreur) return acces.erreur;
  try {
    const analyse = schema.safeParse(await requete.json());
    if (!analyse.success) return NextResponse.json({ succes: false, message: "Les critères d’évaluation sont invalides." }, { status: 422 });
    const appelId = (await contexte.params).id;
    const evaluations = await prisma.evaluation.count({ where: { candidature: { appelId } } });
    if (evaluations) return NextResponse.json({ succes: false, message: "Les critères ne peuvent plus être remplacés après le début des évaluations." }, { status: 409 });
    await prisma.$transaction(async transaction => {
      await transaction.critereEvaluation.deleteMany({ where: { appelId } });
      await transaction.critereEvaluation.createMany({ data: analyse.data.criteres.map(critere => ({ ...critere, appelId })) });
      await transaction.journalAudit.create({ data: { action: "CONFIGURER_CRITERES", entite: "AppelCandidature", entiteId: appelId, utilisateurId: acces.session.user.id } });
    });
    return NextResponse.json({ succes: true, message: "Critères d’évaluation enregistrés." });
  } catch (erreur) { return erreurApi(erreur, "Impossible d’enregistrer les critères."); }
}
