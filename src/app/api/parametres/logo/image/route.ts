import { get } from "@vercel/blob";
import { NextResponse } from "next/server";
import { CLE_CHEMIN_LOGO_ESU } from "@/lib/logo-esu";
import { prisma } from "@/lib/prisma";

/** Sert uniquement le logo institutionnel public depuis le stockage Blob privé. */
export async function GET() {
  try {
    const parametre = await prisma.parametre.findUnique({ where: { cle: CLE_CHEMIN_LOGO_ESU }, select: { valeur: true } });
    if (!parametre) return NextResponse.json({ succes: false, message: "Aucun logo personnalisé." }, { status: 404 });
    const blob = await get(parametre.valeur, { access: "private" });
    if (!blob || blob.statusCode !== 200) return NextResponse.json({ succes: false, message: "Logo indisponible." }, { status: 404 });
    return new NextResponse(blob.stream, { headers: { "Content-Type": blob.blob.contentType || "image/png", "Cache-Control": "public, max-age=300, stale-while-revalidate=86400", "X-Content-Type-Options": "nosniff" } });
  } catch (erreur) {
    console.error("Lecture du logo ESU impossible", erreur);
    return NextResponse.json({ succes: false, message: "Logo indisponible." }, { status: 500 });
  }
}
