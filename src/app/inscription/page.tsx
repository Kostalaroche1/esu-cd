"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { ChampMotDePasse } from "@/components/formulaires/champ-mot-de-passe";
import { LogoEsu } from "@/components/identite/logo-esu";

type Etablissement = { id: string; nom: string; sigle: string | null };

export default function PageInscription() {
  const routeur = useRouter();
  const [etablissements, setEtablissements] = useState<Etablissement[]>([]);
  const [chargementEtablissements, setChargementEtablissements] = useState(true);
  const [erreurEtablissements, setErreurEtablissements] = useState<string | null>(null);
  const [creationEnCours, setCreationEnCours] = useState(false);

  const chargerEtablissements = useCallback(async () => {
    setChargementEtablissements(true);
    setErreurEtablissements(null);
    const controleur = new AbortController();
    const expiration = window.setTimeout(() => controleur.abort(), 20_000);
    try {
      const reponse = await fetch("/api/inscription", { cache: "no-store", signal: controleur.signal });
      const resultat = await reponse.json().catch(() => null);
      if (!reponse.ok) throw new Error(resultat?.message ?? "Le serveur n’a pas pu charger les établissements.");
      const donnees = Array.isArray(resultat?.donnees) ? resultat.donnees : [];
      setEtablissements(donnees);
      if (!donnees.length) setErreurEtablissements("Aucun établissement actif n’est disponible pour l’inscription.");
    } catch (erreur) {
      const message = erreur instanceof DOMException && erreur.name === "AbortError"
        ? "Le chargement prend trop de temps. Vérifiez la connexion au serveur puis réessayez."
        : erreur instanceof Error ? erreur.message : "Impossible de charger les établissements.";
      setErreurEtablissements(message);
      toast.error(message);
    } finally {
      window.clearTimeout(expiration);
      setChargementEtablissements(false);
    }
  }, []);

  useEffect(() => { void chargerEtablissements(); }, [chargerEtablissements]);

  async function inscrire(evenement: React.FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    setCreationEnCours(true);
    const corps = Object.fromEntries(new FormData(evenement.currentTarget));
    try {
      const reponse = await fetch("/api/inscription", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corps) });
      const resultat = await reponse.json().catch(() => null);
      if (!reponse.ok) throw new Error(resultat?.message ?? "Inscription impossible.");
      toast.success(resultat.message);
      routeur.push("/connexion");
    } catch (erreur) {
      toast.error(erreur instanceof Error ? erreur.message : "Inscription impossible.");
    } finally {
      setCreationEnCours(false);
    }
  }

  const inscriptionIndisponible = chargementEtablissements || Boolean(erreurEtablissements) || !etablissements.length;

  return <main className="min-h-screen bg-slate-950 p-4 sm:py-10"><form onSubmit={inscrire} className="mx-auto grid w-full max-w-2xl gap-4 rounded-2xl bg-white p-5 shadow-2xl sm:grid-cols-2 sm:p-8">
    <div className="text-center sm:col-span-2"><LogoEsu className="mx-auto size-14 rounded-2xl bg-blue-700 p-1 font-bold text-white"/><h1 className="mt-3 text-2xl font-bold">Créer un compte étudiant</h1><p className="text-sm text-slate-500">Gestion des bourses de l’ESU</p></div>
    <Champ nom="nom" libelle="Nom"/><Champ nom="postnom" libelle="Postnom" requis={false}/><Champ nom="prenom" libelle="Prénom"/><Champ nom="email" libelle="Adresse électronique" type="email"/>
    <label className="text-sm font-medium sm:col-span-2">Établissement<select name="etablissementId" required disabled={inscriptionIndisponible} className="mt-1.5 min-h-11 w-full rounded-xl border px-3 disabled:bg-slate-100"><option value="">{chargementEtablissements ? "Chargement…" : "Sélectionner…"}</option>{etablissements.map(etablissement => <option key={etablissement.id} value={etablissement.id}>{etablissement.nom}{etablissement.sigle ? ` (${etablissement.sigle})` : ""}</option>)}</select></label>
    {erreurEtablissements && <div role="alert" className="flex flex-col gap-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><span>{erreurEtablissements}</span><button type="button" onClick={() => void chargerEtablissements()} disabled={chargementEtablissements} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-3 font-medium"><RefreshCw className={`size-4 ${chargementEtablissements ? "animate-spin" : ""}`}/>Réessayer</button></div>}
    <label className="text-sm font-medium sm:col-span-2">Mot de passe<ChampMotDePasse name="motDePasse" minLength={12} required autoComplete="new-password" className="mt-1.5 min-h-11 w-full rounded-xl border px-3"/><span className="text-xs text-slate-500">12 caractères minimum.</span></label>
    <button disabled={creationEnCours || inscriptionIndisponible} className="min-h-11 rounded-xl bg-blue-700 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2">{creationEnCours ? "Création…" : "Créer mon compte"}</button><Link href="/connexion" className="text-center text-sm text-blue-700 sm:col-span-2">J’ai déjà un compte</Link>
  </form></main>;
}

function Champ({ nom, libelle, type = "text", requis = true }: { nom: string; libelle: string; type?: string; requis?: boolean }) {
  return <label className="text-sm font-medium">{libelle}<input name={nom} type={type} required={requis} className="mt-1.5 min-h-11 w-full rounded-xl border px-3"/></label>;
}
