"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { ChampMotDePasse } from "@/components/formulaires/champ-mot-de-passe";

export function SecuriteCompte({ changementObligatoire = false }: { changementObligatoire?: boolean }) {
  const [actuel, setActuel] = useState("");
  const [nouveau, setNouveau] = useState("");
  const [chargement, setChargement] = useState(false);

  async function enregistrer(evenement: React.FormEvent) {
    evenement.preventDefault();
    setChargement(true);
    try {
      const reponse = await fetch("/api/mon-compte/mot-de-passe", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ motDePasseActuel: actuel, nouveauMotDePasse: nouveau }) });
      const resultat = await reponse.json().catch(() => null);
      if (!reponse.ok) throw new Error(resultat?.message ?? "Modification impossible.");
      toast.success(`${resultat.message} Reconnectez-vous avec votre nouveau mot de passe.`);
      await signOut({ callbackUrl: "/connexion" });
    } catch (erreur) {
      toast.error(erreur instanceof Error ? erreur.message : "Modification impossible.");
    } finally {
      setChargement(false);
    }
  }

  return <div className="mx-auto max-w-xl"><h1 className="text-2xl font-bold">Sécurité du compte</h1><p className="mt-1 text-sm text-slate-500">Modifiez votre mot de passe personnel.</p>
    {changementObligatoire && <div role="alert" className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"><p className="font-semibold">Changement de mot de passe obligatoire</p><p className="mt-1">Pour protéger votre compte, remplacez le mot de passe initial avant d’accéder aux autres rubriques. Après l’enregistrement, reconnectez-vous avec le nouveau mot de passe.</p></div>}
    <form onSubmit={enregistrer} className="mt-5 space-y-4 rounded-2xl border bg-white p-5"><label className="block text-sm font-medium">Mot de passe actuel<ChampMotDePasse value={actuel} onChange={e => setActuel(e.target.value)} autoComplete="current-password" required className="mt-1.5 min-h-11 w-full rounded-xl border px-3"/></label><label className="block text-sm font-medium">Nouveau mot de passe<ChampMotDePasse value={nouveau} onChange={e => setNouveau(e.target.value)} autoComplete="new-password" minLength={12} required className="mt-1.5 min-h-11 w-full rounded-xl border px-3"/><span className="mt-1 block text-xs text-slate-500">12 caractères minimum.</span></label><button disabled={chargement} className="min-h-11 rounded-xl bg-blue-700 px-4 font-medium text-white disabled:opacity-50">{chargement ? "Enregistrement…" : "Modifier le mot de passe"}</button></form>
  </div>;
}
