"use client";
import { useState } from "react";
import { toast } from "sonner";
import { signOut } from "next-auth/react";
import { ChampMotDePasse } from "@/components/formulaires/champ-mot-de-passe";

export function SecuriteCompte() {
  const [actuel,setActuel]=useState(""); const [nouveau,setNouveau]=useState(""); const [chargement,setChargement]=useState(false);
  async function enregistrer(e:React.FormEvent){e.preventDefault();setChargement(true);try{const r=await fetch("/api/mon-compte/mot-de-passe",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({motDePasseActuel:actuel,nouveauMotDePasse:nouveau})});const x=await r.json();if(!r.ok)throw new Error(x.message);toast.success(`${x.message} Reconnectez-vous avec votre nouveau mot de passe.`);await signOut({callbackUrl:"/connexion"})}catch(e){toast.error(e instanceof Error?e.message:"Modification impossible.")}finally{setChargement(false)}}
  return <div className="mx-auto max-w-xl"><h1 className="text-2xl font-bold">Sécurité du compte</h1><p className="mt-1 text-sm text-slate-500">Modifiez votre mot de passe personnel.</p><form onSubmit={enregistrer} className="mt-5 space-y-4 rounded-2xl border bg-white p-5"><label className="block text-sm font-medium">Mot de passe actuel<ChampMotDePasse value={actuel} onChange={e=>setActuel(e.target.value)} autoComplete="current-password" required className="mt-1.5 min-h-11 w-full rounded-xl border px-3"/></label><label className="block text-sm font-medium">Nouveau mot de passe<ChampMotDePasse value={nouveau} onChange={e=>setNouveau(e.target.value)} autoComplete="new-password" minLength={12} required className="mt-1.5 min-h-11 w-full rounded-xl border px-3"/><span className="mt-1 block text-xs text-slate-500">12 caractères minimum.</span></label><button disabled={chargement} className="min-h-11 rounded-xl bg-blue-700 px-4 font-medium text-white disabled:opacity-50">{chargement?"Enregistrement…":"Modifier le mot de passe"}</button></form></div>
}
