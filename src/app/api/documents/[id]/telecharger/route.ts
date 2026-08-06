import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation } from "@/lib/api";
import { prisma } from "@/lib/prisma";

type Contexte = { params: Promise<{ id: string }> };

export async function GET(requete: NextRequest, contexte: Contexte) {
  const acces = await exigerAutorisation("lire");
  if (acces.erreur) return acces.erreur;
  if (acces.session.user.role === "COMPTABLE") return NextResponse.json({ succes: false, message: "Les pièces privées des candidatures ne sont pas accessibles à la comptabilité." }, { status: 403 });
  const document = await prisma.documentCandidature.findUnique({ where: { id: (await contexte.params).id }, include: { candidature: { select: { etudiantId: true } } } });
  if (!document || (acces.session.user.role === "ETUDIANT" && document.candidature.etudiantId !== acces.session.user.etudiantId)) return NextResponse.json({ succes: false, message: "Document introuvable." }, { status: 404 });
  const blob = await get(document.cheminFichier, { access: "private" });
  if (!blob || blob.statusCode !== 200) return NextResponse.json({ succes: false, message: "Fichier indisponible." }, { status: 404 });
  const disposition = requete.nextUrl.searchParams.get("mode") === "apercu" ? "inline" : "attachment";
  return new NextResponse(blob.stream, { headers: { "Content-Type": document.typeMime ?? "application/octet-stream", "Content-Disposition": `${disposition}; filename*=UTF-8''${encodeURIComponent(document.nomFichier)}`, "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
}
