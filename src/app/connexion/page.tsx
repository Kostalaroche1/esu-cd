"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChampMotDePasse } from "@/components/formulaires/champ-mot-de-passe";
import { LogoEsu } from "@/components/identite/logo-esu";
import Link from "next/link";

export default function PageConnexion() {
  const routeur = useRouter();
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(false);

  async function connecter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setErreur(""); setChargement(true);
    const resultat = await signIn("credentials", { email, motDePasse, redirect: false });
    setChargement(false);
    if (resultat?.error) { setErreur("Adresse électronique ou mot de passe incorrect."); return; }
    routeur.push("/tableau-de-bord"); routeur.refresh();
  }

  return <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
    <form onSubmit={connecter} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
      <div className="mb-6 text-center"><LogoEsu className="mx-auto size-14 rounded-2xl bg-blue-700 p-1 text-xl font-bold text-white" />
      <h1 className="mt-4 text-2xl font-bold">Gestion des bourses d’études</h1><p className="mt-2 text-sm text-slate-500">Ministère de l’Enseignement supérieur et universitaire</p></div>
      <label className="block text-sm font-medium">Adresse électronique</label>
      <input className="mt-2 w-full rounded-lg border px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
      <label className="mt-4 block text-sm font-medium">Mot de passe</label>
      <ChampMotDePasse className="mt-2 w-full rounded-lg border px-3 py-2" value={motDePasse} onChange={e=>setMotDePasse(e.target.value)} required autoComplete="current-password" />
      {erreur && <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{erreur}</p>}
      <button disabled={chargement} className="mt-6 w-full rounded-lg bg-blue-700 px-4 py-2.5 font-semibold text-white hover:bg-blue-800 disabled:opacity-60" type="submit">{chargement ? "Connexion..." : "Se connecter"}</button>
      <Link href="/inscription" className="mt-4 block text-center text-sm font-medium text-blue-700 hover:underline">Créer un compte étudiant</Link>
    </form>
  </main>;
}
