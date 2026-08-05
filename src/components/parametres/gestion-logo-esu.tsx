"use client";

import { ImageUp, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { toast } from "sonner";
import { LogoEsu } from "@/components/identite/logo-esu";
import { EVENEMENT_LOGO_ESU_MODIFIE, TAILLE_MAXIMALE_LOGO, TYPES_IMAGE_LOGO_ACCEPTES } from "@/lib/logo-esu";

function annoncerModification(url: string | null) {
  window.dispatchEvent(new CustomEvent(EVENEMENT_LOGO_ESU_MODIFIE, { detail: { url } }));
}

export function GestionLogoEsu() {
  const champFichier = useRef<HTMLInputElement>(null);
  const [fichier, setFichier] = useState<File | null>(null);
  const [apercu, setApercu] = useState<string | null>(null);
  const [chargement, setChargement] = useState(false);

  useEffect(() => () => { if (apercu) URL.revokeObjectURL(apercu); }, [apercu]);

  function selectionner(evenement: ChangeEvent<HTMLInputElement>) {
    const selection = evenement.target.files?.[0] ?? null;
    setFichier(selection);
    setApercu(selection ? URL.createObjectURL(selection) : null);
  }

  async function televerser() {
    if (!fichier) return toast.error("Sélectionnez d’abord une image.");
    if (!(TYPES_IMAGE_LOGO_ACCEPTES as readonly string[]).includes(fichier.type) || fichier.size > TAILLE_MAXIMALE_LOGO) return toast.error("Utilisez une image PNG, JPEG ou WebP de 2 Mo maximum.");
    setChargement(true);
    const formulaire = new FormData();
    formulaire.set("logo", fichier);
    try {
      const reponse = await fetch("/api/parametres/logo", { method: "POST", body: formulaire });
      const resultat = await reponse.json();
      if (!reponse.ok) throw new Error(resultat.message);
      annoncerModification(resultat.donnees.url);
      toast.success(resultat.message);
      setFichier(null); setApercu(null);
      if (champFichier.current) champFichier.current.value = "";
    } catch (erreur) { toast.error(erreur instanceof Error ? erreur.message : "Le téléversement a échoué."); }
    finally { setChargement(false); }
  }

  async function restaurer() {
    if (!window.confirm("Restaurer le logo ESU par défaut ?")) return;
    setChargement(true);
    try {
      const reponse = await fetch("/api/parametres/logo", { method: "DELETE" });
      const resultat = await reponse.json();
      if (!reponse.ok) throw new Error(resultat.message);
      annoncerModification(null);
      toast.success(resultat.message);
    } catch (erreur) { toast.error(erreur instanceof Error ? erreur.message : "La restauration a échoué."); }
    finally { setChargement(false); }
  }

  return <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
    <div className="flex flex-col gap-5 md:flex-row md:items-center">
      <div className="flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border bg-slate-50 p-2">
        {apercu ? <img src={apercu} alt="Aperçu du nouveau logo" className="h-full w-full object-contain" /> : <LogoEsu className="h-full w-full rounded-xl bg-blue-700 p-1 text-xl font-bold text-white" />}
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-semibold">Identité visuelle</h2>
        <p className="mt-1 text-sm text-slate-500">Le logo apparaît dans la connexion et la navigation. Formats acceptés : PNG, JPEG ou WebP, 2 Mo maximum.</p>
        <input ref={champFichier} type="file" accept={TYPES_IMAGE_LOGO_ACCEPTES.join(",")} onChange={selectionner} className="mt-4 block w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:font-medium hover:file:bg-slate-200" />
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" disabled={!fichier || chargement} onClick={televerser} className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-blue-700 px-4 text-sm font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"><ImageUp className="size-4" />{chargement ? "Traitement…" : "Enregistrer le logo"}</button>
          <button type="button" disabled={chargement} onClick={restaurer} className="inline-flex min-h-10 items-center gap-2 rounded-xl border px-4 text-sm font-medium hover:bg-slate-50 disabled:opacity-50"><RotateCcw className="size-4" />Restaurer par défaut</button>
        </div>
      </div>
    </div>
  </section>;
}
