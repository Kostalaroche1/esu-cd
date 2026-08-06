import { NextRequest, NextResponse } from "next/server";
import { exigerAutorisation } from "@/lib/api";
import { prisma } from "@/lib/prisma";
export async function GET(){const acces=await exigerAutorisation("lire");if(acces.erreur)return acces.erreur;const donnees=await prisma.notification.findMany({where:{utilisateurId:acces.session.user.id},orderBy:{creeLe:"desc"},take:100});return NextResponse.json({succes:true,donnees});}
export async function PATCH(requete:NextRequest){const acces=await exigerAutorisation("lire");if(acces.erreur)return acces.erreur;const {id}=await requete.json();if(id)await prisma.notification.updateMany({where:{id:String(id),utilisateurId:acces.session.user.id},data:{estLue:true}});else await prisma.notification.updateMany({where:{utilisateurId:acces.session.user.id},data:{estLue:true}});return NextResponse.json({succes:true,message:"Notifications mises à jour."});}
