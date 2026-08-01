import { NextRequest, NextResponse } from "next/server";
import { creerDansModule, listerModule, moduleDepuisParametre } from "@/lib/gestion-modules";

type Contexte = { params: Promise<{ ressource: string }> };

export async function GET(requete: NextRequest, contexte: Contexte) {
  const module = moduleDepuisParametre((await contexte.params).ressource);
  return module ? listerModule(requete, module) : NextResponse.json({ succes: false, message: "Ressource inconnue." }, { status: 404 });
}

export async function POST(requete: NextRequest, contexte: Contexte) {
  const module = moduleDepuisParametre((await contexte.params).ressource);
  return module ? creerDansModule(requete, module) : NextResponse.json({ succes: false, message: "Ressource inconnue." }, { status: 404 });
}
