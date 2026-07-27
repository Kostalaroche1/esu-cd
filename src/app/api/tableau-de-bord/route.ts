import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
export async function GET(){const session=await auth(); if(!session?.user)return NextResponse.json({message:"Non autorisé"},{status:401}); const [etudiants,appels,candidatures,retenues,attributions,paiements]=await Promise.all([prisma.etudiant.count({where:{estActif:true}}),prisma.appelCandidature.count(),prisma.candidature.count(),prisma.candidature.count({where:{statut:"RETENUE"}}),prisma.attributionBourse.count({where:{statut:"ACTIVE"}}),prisma.paiement.aggregate({where:{statut:"EFFECTUE"},_sum:{montant:true}})]); return NextResponse.json({donnees:{etudiants,appels,candidatures,retenues,attributions,montantPaye:Number(paiements._sum.montant??0)}})}
