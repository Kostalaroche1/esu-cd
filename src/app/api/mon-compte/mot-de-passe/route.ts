import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { exigerAutorisation, erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";

const schema = z.object({ motDePasseActuel: z.string().min(1), nouveauMotDePasse: z.string().min(12, "Le nouveau mot de passe doit contenir au moins 12 caractères.") }).refine(v => v.motDePasseActuel !== v.nouveauMotDePasse, { path: ["nouveauMotDePasse"], message: "Choisissez un nouveau mot de passe différent." });

export async function PATCH(requete: NextRequest) {
  const acces = await exigerAutorisation("lire"); if (acces.erreur) return acces.erreur;
  try {
    const analyse = schema.safeParse(await requete.json());
    if (!analyse.success) return NextResponse.json({ succes: false, message: analyse.error.issues[0]?.message ?? "Données invalides." }, { status: 422 });
    const utilisateur = await prisma.utilisateur.findUnique({ where: { id: acces.session.user.id }, select: { motDePasse: true } });
    if (!utilisateur || !await bcrypt.compare(analyse.data.motDePasseActuel, utilisateur.motDePasse)) return NextResponse.json({ succes: false, message: "Le mot de passe actuel est incorrect." }, { status: 403 });
    const motDePasse = await bcrypt.hash(analyse.data.nouveauMotDePasse, 12);
    await prisma.$transaction([
      prisma.utilisateur.update({ where: { id: acces.session.user.id }, data: { motDePasse, doitChangerMotDePasse: false, tentativesConnexion: 0, verrouilleJusqua: null } }),
      prisma.journalAudit.create({ data: { action: "CHANGER_MOT_DE_PASSE", entite: "Utilisateur", entiteId: acces.session.user.id, utilisateurId: acces.session.user.id } }),
    ]);
    return NextResponse.json({ succes: true, message: "Mot de passe modifié." });
  } catch (erreur) { return erreurApi(erreur, "Impossible de modifier le mot de passe."); }
}
