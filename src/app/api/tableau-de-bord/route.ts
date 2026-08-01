import { NextResponse } from "next/server";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const acces = await exigerAutorisation("lire");
  if (acces.erreur) return acces.erreur;
  try {
    const etudiantId = acces.session.user.role === "ETUDIANT" ? acces.session.user.etudiantId ?? "__aucun__" : undefined;
    const filtreEtudiant = etudiantId ? { etudiantId } : {};
    const maintenant = new Date();
    const dansTrenteJours = new Date(maintenant.getTime() + 30 * 86400000);
    const [etudiants, appels, candidatures, retenues, attributions, paiements, recentes, echeances, paiementsEnRetard] = await Promise.all([
      prisma.etudiant.count({ where: etudiantId ? { id: etudiantId, estActif: true } : { estActif: true } }),
      prisma.appelCandidature.count({ where: etudiantId ? { estPublie: true } : {} }),
      prisma.candidature.count({ where: filtreEtudiant }),
      prisma.candidature.count({ where: { ...filtreEtudiant, statut: "RETENUE" } }),
      prisma.attributionBourse.count({ where: { ...filtreEtudiant, statut: "ACTIVE" } }),
      prisma.paiement.aggregate({ where: { statut: "EFFECTUE", ...(etudiantId ? { attribution: { etudiantId } } : {}) }, _sum: { montant: true } }),
      prisma.candidature.findMany({ where: filtreEtudiant, take: 6, orderBy: { creeLe: "desc" }, include: { etudiant: { select: { nom: true, prenom: true } }, appel: { select: { titre: true } } } }),
      prisma.appelCandidature.findMany({ where: { estPublie: true, dateCloture: { gte: maintenant, lte: dansTrenteJours } }, take: 5, orderBy: { dateCloture: "asc" }, select: { id: true, titre: true, dateCloture: true } }),
      prisma.paiement.count({ where: { statut: "PREVU", datePrevue: { lt: maintenant }, ...(etudiantId ? { attribution: { etudiantId } } : {}) } }),
    ]);
    return NextResponse.json({ succes: true, donnees: { etudiants, appels, candidatures, retenues, attributions, montantPaye: Number(paiements._sum.montant ?? 0), recentes, echeances, paiementsEnRetard } });
  } catch (erreur) { return erreurApi(erreur, "Le tableau de bord est indisponible."); }
}
