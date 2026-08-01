import { NextRequest, NextResponse } from "next/server";
import { modifierDansModule, moduleDepuisParametre, supprimerDansModule } from "@/lib/gestion-modules";

type Contexte = { params: Promise<{ ressource: string; id: string }> };

export async function PATCH(requete: NextRequest, contexte: Contexte) {
  const { ressource, id } = await contexte.params;
  const module = moduleDepuisParametre(ressource);
  return module ? modifierDansModule(requete, module, id) : NextResponse.json({ succes: false, message: "Ressource inconnue." }, { status: 404 });
}

export async function DELETE(_: NextRequest, contexte: Contexte) {
  const { ressource, id } = await contexte.params;
  const module = moduleDepuisParametre(ressource);
  return module ? supprimerDansModule(module, id) : NextResponse.json({ succes: false, message: "Ressource inconnue." }, { status: 404 });
}
