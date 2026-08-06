import "next-auth";
import "next-auth/jwt";
import type { RoleUtilisateur } from "@/generated/prisma/client";

declare module "next-auth" {
  interface User {
    role: RoleUtilisateur;
    etudiantId?: string | null;
    doitChangerMotDePasse?: boolean;
  }
  interface Session {
    user: {
      id: string;
      role: RoleUtilisateur;
      etudiantId?: string | null;
      doitChangerMotDePasse?: boolean;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: RoleUtilisateur;
    etudiantId?: string | null;
    doitChangerMotDePasse?: boolean;
  }
}
