import { NextResponse } from "next/server";
import { erreurApi, exigerAutorisation } from "@/lib/api";
import { prisma } from "@/lib/prisma";

/** Retourne les comptes actifs autorisés à recevoir une affectation d'évaluation. */
export async function GET() {
  const acces = await exigerAutorisation("evaluer");
  if (acces.erreur) return acces.erreur;

  if (![
    "SUPER_ADMINISTRATEUR",
    "ADMINISTRATEUR",
    "GESTIONNAIRE_BOURSES",
  ].includes(acces.session.user.role)) {
    return NextResponse.json(
      { succes: false, message: "L’affectation des évaluateurs est réservée à l’administration et aux gestionnaires." },
      { status: 403 },
    );
  }

  try {
    const donnees = await prisma.utilisateur.findMany({
      where: {
        role: { in: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "EVALUATEUR"] },
        estActif: true,
      },
      select: { id: true, nomComplet: true, email: true },
      orderBy: { nomComplet: "asc" },
    });
    return NextResponse.json({ succes: true, donnees });
  } catch (erreur) {
    return erreurApi(erreur, "Impossible de charger la liste des évaluateurs.");
  }
}
