import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import type { RoleUtilisateur } from "@/generated/prisma/client";

const schemaConnexion = z.object({
  email: z.string().trim().toLowerCase().email(),
  motDePasse: z.string().min(6),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/connexion" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Adresse électronique", type: "email" },
        motDePasse: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const resultat = schemaConnexion.safeParse(credentials);
        if (!resultat.success) return null;

        const utilisateur = await prisma.utilisateur.findUnique({
          where: { email: resultat.data.email },
        });

        if (!utilisateur?.estActif) return null;
        if (utilisateur.verrouilleJusqua && utilisateur.verrouilleJusqua > new Date()) return null;
        const valide = await bcrypt.compare(resultat.data.motDePasse, utilisateur.motDePasse);
        if (!valide) {
          const tentatives = utilisateur.tentativesConnexion + 1;
          await prisma.utilisateur.update({ where: { id: utilisateur.id }, data: { tentativesConnexion: tentatives, verrouilleJusqua: tentatives >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null } });
          return null;
        }
        if (utilisateur.tentativesConnexion || utilisateur.verrouilleJusqua) await prisma.utilisateur.update({ where: { id: utilisateur.id }, data: { tentativesConnexion: 0, verrouilleJusqua: null } });

        return {
          id: utilisateur.id,
          name: utilisateur.nomComplet,
          email: utilisateur.email,
          role: utilisateur.role,
          etudiantId: utilisateur.etudiantId,
          doitChangerMotDePasse: utilisateur.doitChangerMotDePasse,
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth: session, request }) {
      if (!session?.user) return false;
      const chemin = request.nextUrl.pathname;
      const role = session.user.role;
      if (session.user.doitChangerMotDePasse && chemin !== "/mon-compte") return Response.redirect(new URL("/mon-compte", request.nextUrl));
      if ((chemin.startsWith("/utilisateurs") || chemin.startsWith("/parametres")) && !["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"].includes(role)) return false;
      if (chemin.startsWith("/evaluations") && !["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "EVALUATEUR"].includes(role)) return false;
      if (chemin.startsWith("/decisions") && !["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES"].includes(role)) return false;
      if (chemin.startsWith("/journal-audit") && role !== "SUPER_ADMINISTRATEUR") return false;
      if (chemin.startsWith("/rapports") && !["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "COMPTABLE"].includes(role)) return false;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.etudiantId = user.etudiantId;
        token.doitChangerMotDePasse = user.doitChangerMotDePasse;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id);
        session.user.role = token.role as RoleUtilisateur;
        session.user.etudiantId = (token.etudiantId as string | null) ?? null;
        session.user.doitChangerMotDePasse = Boolean(token.doitChangerMotDePasse);
      }
      return session;
    },
  },
});
