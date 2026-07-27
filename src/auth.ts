import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schemaConnexion = z.object({
  email: z.string().email(),
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
        const valide = await bcrypt.compare(resultat.data.motDePasse, utilisateur.motDePasse);
        if (!valide) return null;

        return {
          id: utilisateur.id,
          name: utilisateur.nomComplet,
          email: utilisateur.email,
          role: utilisateur.role,
          etudiantId: utilisateur.etudiantId,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.etudiantId = (user as any).etudiantId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id);
        session.user.role = token.role as any;
        session.user.etudiantId = (token.etudiantId as string | null) ?? null;
      }
      return session;
    },
  },
});
