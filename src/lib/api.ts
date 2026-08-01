import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { ActionMetier } from "@/lib/autorisations";
import { peut } from "@/lib/autorisations";

export async function exigerAutorisation(action: ActionMetier) {
  const session = await auth();
  if (!session?.user) return { erreur: NextResponse.json({ succes: false, message: "Authentification requise." }, { status: 401 }) };
  if (!peut(session.user.role, action)) return { erreur: NextResponse.json({ succes: false, message: "Vous n’êtes pas autorisé à effectuer cette action." }, { status: 403 }) };
  return { session };
}

export function erreurApi(erreur: unknown, message = "Une erreur interne est survenue.") {
  console.error(erreur);
  return NextResponse.json({ succes: false, message }, { status: 500 });
}
