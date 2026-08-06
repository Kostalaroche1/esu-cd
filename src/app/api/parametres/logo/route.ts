import { del, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { CLE_CHEMIN_LOGO_ESU, CLE_URL_LOGO_ESU, TAILLE_MAXIMALE_LOGO, TYPES_IMAGE_LOGO_ACCEPTES } from "@/lib/logo-esu";
import { prisma } from "@/lib/prisma";

const extensionsParType: Record<string, string> = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp" };

function contenuCorrespondAuType(octets: Uint8Array, type: string) {
  if (type === "image/png") return octets.length >= 8 && [137, 80, 78, 71, 13, 10, 26, 10].every((valeur, index) => octets[index] === valeur);
  if (type === "image/jpeg") return octets.length >= 3 && octets[0] === 255 && octets[1] === 216 && octets[2] === 255;
  if (type === "image/webp") return octets.length >= 12 && new TextDecoder().decode(octets.slice(0, 4)) === "RIFF" && new TextDecoder().decode(octets.slice(8, 12)) === "WEBP";
  return false;
}

/** La lecture est publique afin que le logo soit disponible sur la page de connexion. */
export async function GET() {
  try {
    const parametre = await prisma.parametre.findUnique({ where: { cle: CLE_URL_LOGO_ESU }, select: { valeur: true } });
    return NextResponse.json({ succes: true, donnees: { url: parametre?.valeur ?? null } });
  } catch (erreur) { return erreurApi(erreur, "Impossible de charger le logo de l’ESU."); }
}

export async function POST(requete: NextRequest) {
  const acces = await exigerAutorisation("parametrer");
  if (acces.erreur) return acces.erreur;
  if (!process.env.BLOB_READ_WRITE_TOKEN?.trim()) {
    return NextResponse.json(
      { succes: false, message: "Le stockage Vercel Blob n’est pas configuré. Renseignez BLOB_READ_WRITE_TOKEN puis redémarrez l’application." },
      { status: 503 },
    );
  }
  let nouvelleUrl: string | null = null;
  try {
    const fichier = (await requete.formData()).get("logo");
    if (!(fichier instanceof File)) return NextResponse.json({ succes: false, message: "Sélectionnez une image." }, { status: 422 });
    if (!(TYPES_IMAGE_LOGO_ACCEPTES as readonly string[]).includes(fichier.type)) return NextResponse.json({ succes: false, message: "Le logo doit être une image PNG, JPEG ou WebP." }, { status: 422 });
    if (fichier.size === 0 || fichier.size > TAILLE_MAXIMALE_LOGO) return NextResponse.json({ succes: false, message: "Le logo ne doit pas dépasser 2 Mo." }, { status: 422 });
    const octets = new Uint8Array(await fichier.arrayBuffer());
    if (!contenuCorrespondAuType(octets, fichier.type)) return NextResponse.json({ succes: false, message: "Le contenu du fichier ne correspond pas à une image valide." }, { status: 422 });

    const ancienChemin = await prisma.parametre.findUnique({ where: { cle: CLE_CHEMIN_LOGO_ESU }, select: { valeur: true } });
    const blob = await put(`identite/logo-esu.${extensionsParType[fichier.type]}`, fichier, { access: "public", addRandomSuffix: true, contentType: fichier.type });
    nouvelleUrl = blob.url;
    await prisma.$transaction([
      prisma.parametre.upsert({ where: { cle: CLE_URL_LOGO_ESU }, create: { cle: CLE_URL_LOGO_ESU, valeur: blob.url }, update: { valeur: blob.url } }),
      prisma.parametre.upsert({ where: { cle: CLE_CHEMIN_LOGO_ESU }, create: { cle: CLE_CHEMIN_LOGO_ESU, valeur: blob.pathname }, update: { valeur: blob.pathname } }),
    ]);
    if (ancienChemin?.valeur && ancienChemin.valeur !== blob.pathname) await del(ancienChemin.valeur).catch(console.error);
    return NextResponse.json({ succes: true, message: "Le logo de l’ESU a été mis à jour.", donnees: { url: blob.url } });
  } catch (erreur) {
    if (nouvelleUrl) await del(nouvelleUrl).catch(console.error);
    return erreurApi(erreur, "Le téléversement du logo a échoué. Vérifiez que le jeton Vercel Blob est valide et autorisé pour ce stockage.");
  }
}

export async function DELETE() {
  const acces = await exigerAutorisation("parametrer");
  if (acces.erreur) return acces.erreur;
  try {
    const chemin = await prisma.parametre.findUnique({ where: { cle: CLE_CHEMIN_LOGO_ESU }, select: { valeur: true } });
    await prisma.parametre.deleteMany({ where: { cle: { in: [CLE_URL_LOGO_ESU, CLE_CHEMIN_LOGO_ESU] } } });
    if (chemin?.valeur) await del(chemin.valeur).catch(console.error);
    return NextResponse.json({ succes: true, message: "Le logo par défaut a été restauré.", donnees: { url: null } });
  } catch (erreur) { return erreurApi(erreur, "Impossible de restaurer le logo par défaut."); }
}
