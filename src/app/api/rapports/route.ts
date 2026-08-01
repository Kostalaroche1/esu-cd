import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";

export async function GET(requete: NextRequest) {
  const acces = await exigerAutorisation("lire"); if (acces.erreur) return acces.erreur;
  try {
    const p = requete.nextUrl.searchParams;
    const where: Prisma.CandidatureWhereInput = {};
    if (p.get("debut") || p.get("fin")) where.creeLe = { ...(p.get("debut") ? { gte: new Date(`${p.get("debut")}T00:00:00`) } : {}), ...(p.get("fin") ? { lte: new Date(`${p.get("fin")}T23:59:59`) } : {}) };
    if (p.get("statut")) where.statut = p.get("statut") as Prisma.EnumStatutCandidatureFilter;
    if (p.get("etudiantId")) where.etudiantId = p.get("etudiantId")!;
    if (p.get("programmeId")) where.appel = { programmeId: p.get("programmeId")! };
    if (p.get("etablissementId")) where.etudiant = { etablissementId: p.get("etablissementId")! };
    if (p.get("decision")) where.evaluations = { some: { decision: p.get("decision") as Prisma.EnumDecisionEvaluationFilter } };
    if (acces.session.user.role === "ETUDIANT") where.etudiantId = acces.session.user.etudiantId ?? "__aucun__";
    const [total, retenues, rejetees, actives, paiements, lignes] = await Promise.all([
      prisma.candidature.count({ where }), prisma.candidature.count({ where: { ...where, statut: "RETENUE" } }), prisma.candidature.count({ where: { ...where, statut: "REJETEE" } }),
      prisma.attributionBourse.count({ where: { candidature: where, statut: "ACTIVE" } }), prisma.paiement.aggregate({ where: { statut: "EFFECTUE", attribution: { candidature: where } }, _sum: { montant: true } }),
      prisma.candidature.findMany({ where, take: 500, orderBy: { creeLe: "desc" }, include: { etudiant: { include: { etablissement: { select: { nom: true } } } }, appel: { include: { programme: { select: { nom: true } } } }, evaluations: { select: { decision: true, note: true } }, attribution: { select: { montantAccorde: true, statut: true } } } }),
    ]);
    return NextResponse.json({ succes: true, donnees: { total, retenues, rejetees, actives, montantPaye: Number(paiements._sum.montant ?? 0), lignes } });
  } catch (erreur) { return erreurApi(erreur, "Impossible de produire le rapport."); }
}
