import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
export async function GET(){const session=await auth(); if(!session?.user)return NextResponse.json({message:"Non autorisé"},{status:401}); try{const donnees=await (async()=>{return prisma.candidature.findMany({include:{etudiant:true,appel:true},orderBy:{creeLe:"desc"},take:100})})(); return NextResponse.json({succes:true,donnees})}catch(e){console.error(e);return NextResponse.json({succes:false,message:"Erreur de chargement."},{status:500})}}
