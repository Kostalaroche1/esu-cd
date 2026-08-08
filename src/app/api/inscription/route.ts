import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { erreurApi } from "@/lib/api";
import { prisma } from "@/lib/prisma";

const schema = z.object({ nom: z.string().trim().min(2), postnom: z.string().trim().optional(), prenom: z.string().trim().min(2), email: z.string().trim().toLowerCase().email(), motDePasse: z.string().min(12), etablissementId: z.string().min(1) });
function matricule(){return `ETU-${new Date().getFullYear()}-${crypto.randomUUID().replaceAll("-","").slice(0,8).toUpperCase()}`}

export async function GET() {
  try {
    const donnees = await prisma.etablissement.findMany({
      where: { estActif: true },
      select: { id: true, nom: true, sigle: true },
      orderBy: { nom: "asc" },
    });
    return NextResponse.json({ succes: true, donnees });
  } catch (erreur) {
    return erreurApi(erreur, "Impossible de charger les établissements. Réessayez dans quelques instants.");
  }
}
export async function POST(requete:NextRequest){try{const analyse=schema.safeParse(await requete.json());if(!analyse.success)return NextResponse.json({succes:false,message:"Vérifiez les informations saisies.",erreurs:analyse.error.flatten().fieldErrors},{status:422});const d=analyse.data;const existe=await prisma.utilisateur.findUnique({where:{email:d.email},select:{id:true}});if(existe)return NextResponse.json({succes:false,message:"Cette adresse électronique est déjà utilisée."},{status:409});const motDePasse=await bcrypt.hash(d.motDePasse,12);await prisma.$transaction(async t=>{const etudiant=await t.etudiant.create({data:{matricule:matricule(),nom:d.nom,postnom:d.postnom||null,prenom:d.prenom,email:d.email,etablissementId:d.etablissementId}});const utilisateur=await t.utilisateur.create({data:{nomComplet:[d.prenom,d.postnom,d.nom].filter(Boolean).join(" "),email:d.email,motDePasse,role:"ETUDIANT",etudiantId:etudiant.id}});await t.journalAudit.create({data:{action:"INSCRIPTION_ETUDIANT",entite:"Utilisateur",entiteId:utilisateur.id,utilisateurId:utilisateur.id}})});return NextResponse.json({succes:true,message:"Votre compte étudiant a été créé."},{status:201})}catch(erreur){return erreurApi(erreur,"L’inscription a échoué.")}}
