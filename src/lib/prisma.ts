import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

const globalPrisma = globalThis as unknown as { prisma?: PrismaClient };

function creerClientPrisma() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("La variable DATABASE_URL est obligatoire.");
  return new PrismaClient({ adapter: new PrismaMariaDb(url) });
}

export const prisma = globalPrisma.prisma ?? creerClientPrisma();

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prisma;
