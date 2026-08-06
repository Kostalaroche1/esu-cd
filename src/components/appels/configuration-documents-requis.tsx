"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { libellesTypesDocuments, typesDocuments, type TypeDocumentMetier } from "@/lib/workflow-documents";

type Appel = { id: string; reference: string; titre: string };

export function ConfigurationDocumentsRequis() {
  const [appels, setAppels] = useState<Appel[]>([]);
  const [appelId, setAppelId] = useState("");
  const [selection, setSelection] = useState<TypeDocumentMetier[]>([]);
  const [chargement, setChargement] = useState(false);

  useEffect(() => { fetch("/api/appels?taille=100", { cache: "no-store" }).then(r => r.json()).then(r => setAppels(r.donnees ?? [])).catch(() => toast.error("Impossible de charger les appels.")); }, []);
  useEffect(() => {
    if (!appelId) return setSelection([]);
    fetch(`/api/appels/${appelId}/documents-requis`, { cache: "no-store" }).then(r => r.json()).then(r => setSelection((r.donnees ?? []).map((d: { type: TypeDocumentMetier }) => d.type))).catch(() => toast.error("Impossible de charger les documents requis."));
  }, [appelId]);

  function basculer(type: TypeDocumentMetier) { setSelection(courante => courante.includes(type) ? courante.filter(v => v !== type) : [...courante, type]); }
  async function enregistrer() {
    if (!appelId) return toast.error("Sélectionnez un appel.");
    setChargement(true);
    try {
      const reponse = await fetch(`/api/appels/${appelId}/documents-requis`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ types: selection }) });
      const resultat = await reponse.json(); if (!reponse.ok) throw new Error(resultat.message); toast.success(resultat.message);
    } catch (erreur) { toast.error(erreur instanceof Error ? erreur.message : "Enregistrement impossible."); }
    finally { setChargement(false); }
  }

  return <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6"><h2 className="text-lg font-semibold">Documents obligatoires par appel</h2><p className="mt-1 text-sm text-slate-500">Une candidature ne pourra être soumise que lorsque toutes les pièces sélectionnées sont présentes.</p><select value={appelId} onChange={e => setAppelId(e.target.value)} className="mt-4 min-h-11 w-full rounded-xl border px-3"><option value="">Sélectionner un appel…</option>{appels.map(appel => <option key={appel.id} value={appel.id}>{appel.reference} — {appel.titre}</option>)}</select>{appelId && <><div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{typesDocuments.map(type => <label key={type} className="flex min-h-11 items-center gap-3 rounded-xl border px-3"><input type="checkbox" checked={selection.includes(type)} onChange={() => basculer(type)}/><span className="text-sm">{libellesTypesDocuments[type]}</span></label>)}</div><button disabled={chargement} onClick={() => void enregistrer()} className="mt-4 min-h-11 rounded-xl bg-blue-700 px-4 font-medium text-white disabled:opacity-50">{chargement ? "Enregistrement…" : "Enregistrer les exigences"}</button></>}</section>;
}
