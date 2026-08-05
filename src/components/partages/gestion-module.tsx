"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Menu } from "@base-ui/react/menu";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight, MoreHorizontal, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { toast } from "sonner";
import { interfacesModules, type ChampFormulaire } from "@/components/partages/configurations-modules";
import { GestionDocuments } from "@/components/candidatures/gestion-documents";
import { schemasModules, type NomModule } from "@/lib/modules-metier";
import { useUtilisateurConnecte } from "@/components/disposition/coquille-administration";
import { ChampMotDePasse } from "@/components/formulaires/champ-mot-de-passe";

type Ligne = Record<string, unknown>;
type Pagination = { page: number; taille: number; total: number; pages: number };
type Valeurs = Record<string, string | number | boolean | null>;

function lire(ligne: Ligne, chemin: string): unknown {
  const parties = chemin.split(".");
  let valeur: unknown = ligne;
  for (const partie of parties) {
    if (partie === "nomComplet" && valeur && typeof valeur === "object") {
      const objet = valeur as Ligne;
      return [objet.prenom, objet.postnom, objet.nom].filter(Boolean).join(" ");
    }
    valeur = valeur && typeof valeur === "object" ? (valeur as Ligne)[partie] : undefined;
  }
  return valeur;
}

function afficher(valeur: unknown) {
  if (typeof valeur === "boolean") return valeur ? "Oui" : "Non";
  if (valeur === null || valeur === undefined || valeur === "") return "—";
  if (typeof valeur === "string" && /^\d{4}-\d{2}-\d{2}T/.test(valeur)) return new Intl.DateTimeFormat("fr-FR").format(new Date(valeur));
  if (typeof valeur === "number") return valeur.toLocaleString("fr-FR");
  return String(valeur).replaceAll("_", " ");
}

function valeurFormulaire(ligne: Ligne, champ: ChampFormulaire) {
  const valeur = ligne[champ.nom];
  if (champ.type === "date" && typeof valeur === "string") return valeur.slice(0, 10);
  return valeur ?? (champ.type === "checkbox" ? true : "");
}

export function GestionModule({ module }: { module: NomModule }) {
  const utilisateur = useUtilisateurConnecte();
  const interfaceModule = interfacesModules[module];
  const [lignes, setLignes] = useState<Ligne[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, taille: 10, total: 0, pages: 1 });
  const [recherche, setRecherche] = useState("");
  const [saisieRecherche, setSaisieRecherche] = useState("");
  const [filtreStatut, setFiltreStatut] = useState("");
  const [chargement, setChargement] = useState(true);
  const [ouvert, setOuvert] = useState(false);
  const [selection, setSelection] = useState<Ligne | null>(null);
  const [options, setOptions] = useState<Record<string, Ligne[]>>({});
  const formulaire = useForm<Valeurs>({ resolver: zodResolver(schemasModules[module]) as unknown as Resolver<Valeurs> });
  const estSuperAdministrateur = utilisateur.role === "SUPER_ADMINISTRATEUR";
  const peutCreer = estSuperAdministrateur || utilisateur.role === "ADMINISTRATEUR" || (utilisateur.role === "GESTIONNAIRE_BOURSES" && !["utilisateurs", "parametres", "paiements"].includes(module)) || (utilisateur.role === "EVALUATEUR" && module === "evaluations") || (utilisateur.role === "COMPTABLE" && module === "paiements") || (utilisateur.role === "ETUDIANT" && module === "candidatures");
  const peutModifier = peutCreer || (utilisateur.role === "ETUDIANT" && module === "etudiants");

  const charger = useCallback(async (page = pagination.page) => {
    setChargement(true);
    try {
      const reponse = await fetch(`/api/${module}?page=${page}&taille=${pagination.taille}&recherche=${encodeURIComponent(recherche)}${filtreStatut ? `&statut=${encodeURIComponent(filtreStatut)}` : ""}`, { cache: "no-store" });
      const resultat = await reponse.json();
      if (!reponse.ok) throw new Error(resultat.message);
      setLignes(resultat.donnees ?? []); setPagination(resultat.pagination);
    } catch (erreur) { toast.error(erreur instanceof Error ? erreur.message : "Chargement impossible."); }
    finally { setChargement(false); }
  }, [module, pagination.page, pagination.taille, recherche, filtreStatut]);

  useEffect(() => { void charger(); }, [charger]);

  useEffect(() => {
    const temporisation = window.setTimeout(() => {
      setRecherche(saisieRecherche.trim());
      setPagination(paginationActuelle => ({ ...paginationActuelle, page: 1 }));
    }, 350);
    return () => window.clearTimeout(temporisation);
  }, [saisieRecherche]);

  const sources = useMemo(() => [...new Set(interfaceModule.champs.map(c => c.source).filter(Boolean) as string[])], [interfaceModule]);
  const choixStatuts = interfaceModule.champs.find(champ => champ.nom === "statut")?.options;
  useEffect(() => {
    for (const source of sources) void fetch(`/api/${source}?taille=100`, { cache: "no-store" }).then(r => r.json()).then(r => setOptions(o => ({ ...o, [source]: r.donnees ?? [] })));
  }, [sources]);

  function ouvrirCreation() {
    setSelection(null);
    formulaire.reset(Object.fromEntries(interfaceModule.champs.map(champ => [champ.nom, champ.type === "checkbox" ? true : champ.nom === "devise" ? "USD" : ""])));
    setOuvert(true);
  }

  function ouvrirModification(ligne: Ligne) {
    setSelection(ligne);
    formulaire.reset(Object.fromEntries(interfaceModule.champs.map(champ => [champ.nom, valeurFormulaire(ligne, champ)])) as Valeurs);
    setOuvert(true);
  }

  async function enregistrer(valeurs: Valeurs) {
    const url = selection ? `/api/${module}/${selection.id}` : `/api/${module}`;
    const reponse = await fetch(url, { method: selection ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(valeurs) });
    const resultat = await reponse.json();
    if (!reponse.ok) { toast.error(resultat.message ?? "Enregistrement impossible."); return; }
    toast.success(resultat.message); setOuvert(false); await charger(selection ? pagination.page : 1);
  }

  async function supprimer(ligne: Ligne) {
    if (!window.confirm("Supprimer définitivement cet enregistrement ?")) return;
    const reponse = await fetch(`/api/${module}/${ligne.id}`, { method: "DELETE" });
    const resultat = await reponse.json();
    if (!reponse.ok) return toast.error(resultat.message);
    toast.success(resultat.message); await charger();
  }

  return <div className="space-y-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div><h1 className="text-2xl font-bold tracking-tight">{interfaceModule.titre}</h1><p className="mt-1 text-sm text-slate-500">{interfaceModule.description}</p></div>
      {peutCreer && <button onClick={ouvrirCreation} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"><Plus className="size-4"/>Ajouter</button>}
    </div>
    <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row">
        <label className="relative flex-1"><span className="sr-only">Rechercher</span><Search className="absolute left-3 top-3 size-4 text-slate-400"/><input value={saisieRecherche} onChange={e => setSaisieRecherche(e.target.value)} placeholder="Rechercher…" className="h-10 w-full rounded-xl border pl-9 pr-3 outline-none focus:border-blue-600"/></label>
        {choixStatuts && <select aria-label="Filtrer par statut" value={filtreStatut} onChange={e => { setFiltreStatut(e.target.value); setPagination(p => ({ ...p, page: 1 })); }} className="h-10 rounded-xl border px-3"><option value="">Tous les statuts</option>{choixStatuts.map(statut => <option key={statut} value={statut}>{statut.replaceAll("_", " ")}</option>)}</select>}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-sm"><thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500"><tr>{interfaceModule.colonnes.map(c => <th className="px-4 py-3" key={c.cle}>{c.libelle}</th>)}<th className="px-4 py-3 text-right">Actions</th></tr></thead>
          <tbody>{chargement ? <tr><td colSpan={interfaceModule.colonnes.length + 1} className="p-10 text-center text-slate-500">Chargement des données…</td></tr> : lignes.length === 0 ? <tr><td colSpan={interfaceModule.colonnes.length + 1} className="p-10 text-center text-slate-500">Aucun enregistrement trouvé.</td></tr> : lignes.map(ligne => <tr key={String(ligne.id)} className="border-t hover:bg-slate-50/70">{interfaceModule.colonnes.map(c => <td className="max-w-xs px-4 py-3" key={c.cle}>{afficher(lire(ligne, c.cle))}</td>)}<td className="px-4 py-3 text-right"><Menu.Root><Menu.Trigger className="inline-flex rounded-lg border p-2 hover:bg-white" aria-label="Menu Actions"><MoreHorizontal className="size-4"/></Menu.Trigger><Menu.Portal><Menu.Positioner side="bottom" align="end" sideOffset={6} className="z-[80]"><Menu.Popup className="w-44 rounded-xl border bg-white p-1 text-left shadow-xl outline-none">{module === "candidatures" && <GestionDocuments candidatureId={String(ligne.id)} reference={String(ligne.reference)}/>} {peutModifier && <Menu.Item onClick={() => ouvrirModification(ligne)} className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 outline-none hover:bg-slate-100 focus:bg-slate-100"><Pencil className="size-4"/>Modifier</Menu.Item>}{estSuperAdministrateur && <Menu.Item onClick={() => void supprimer(ligne)} className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-red-700 outline-none hover:bg-red-50 focus:bg-red-50"><Trash2 className="size-4"/>Supprimer</Menu.Item>}</Menu.Popup></Menu.Positioner></Menu.Portal></Menu.Root></td></tr>)}</tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t p-4 text-sm sm:flex-row sm:items-center sm:justify-between"><span>{pagination.total} enregistrement(s)</span><div className="flex items-center gap-2"><button disabled={pagination.page <= 1} onClick={() => { const page = pagination.page - 1; setPagination(p => ({ ...p, page })); void charger(page); }} className="rounded-lg border p-2 disabled:opacity-40"><ChevronLeft className="size-4"/></button><span>Page {pagination.page} / {pagination.pages}</span><button disabled={pagination.page >= pagination.pages} onClick={() => { const page = pagination.page + 1; setPagination(p => ({ ...p, page })); void charger(page); }} className="rounded-lg border p-2 disabled:opacity-40"><ChevronRight className="size-4"/></button></div></div>
    </section>
    <Dialog.Root open={ouvert} onOpenChange={setOuvert}><Dialog.Portal><Dialog.Backdrop className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"/><Dialog.Viewport className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"><Dialog.Popup className="max-h-[95vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-3xl sm:rounded-2xl"><div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-5"><Dialog.Title className="text-lg font-bold">{selection ? "Modifier" : "Nouvel enregistrement"}</Dialog.Title><Dialog.Close className="rounded-lg p-2 hover:bg-slate-100"><X className="size-5"/></Dialog.Close></div>
      <form onSubmit={formulaire.handleSubmit(enregistrer)} className="grid gap-4 p-5 sm:grid-cols-2">{interfaceModule.champs.map(champ => <Champ key={champ.nom} champ={champ} formulaire={formulaire} options={champ.source ? options[champ.source] ?? [] : []}/>) }<div className="flex flex-col-reverse gap-2 border-t pt-4 sm:col-span-2 sm:flex-row sm:justify-end"><Dialog.Close className="min-h-11 rounded-xl border px-4">Annuler</Dialog.Close><button disabled={formulaire.formState.isSubmitting} className="min-h-11 rounded-xl bg-blue-700 px-5 font-semibold text-white disabled:opacity-50">{formulaire.formState.isSubmitting ? "Enregistrement…" : "Enregistrer"}</button></div></form>
    </Dialog.Popup></Dialog.Viewport></Dialog.Portal></Dialog.Root>
  </div>;
}

function Champ({ champ, formulaire, options }: { champ: ChampFormulaire; formulaire: ReturnType<typeof useForm<Valeurs>>; options: Ligne[] }) {
  const erreur = formulaire.formState.errors[champ.nom]?.message;
  const classe = "mt-1.5 min-h-11 w-full rounded-xl border px-3 outline-none focus:border-blue-600";
  if (champ.type === "checkbox") return <label className="flex min-h-11 items-center gap-3 self-end rounded-xl border px-3"><input type="checkbox" {...formulaire.register(champ.nom)}/><span>{champ.libelle}</span></label>;
  return <label className={champ.type === "textarea" ? "sm:col-span-2" : ""}><span className="text-sm font-medium">{champ.libelle}{champ.requis && <span className="text-red-600"> *</span>}</span>
    {champ.type === "textarea" ? <textarea rows={4} className={classe} {...formulaire.register(champ.nom)}/> : champ.type === "select" ? <select className={classe} {...formulaire.register(champ.nom)}><option value="">Sélectionner…</option>{(champ.options ?? []).map(v => <option key={v} value={v}>{v.replaceAll("_", " ")}</option>)}{options.map(option => <option key={String(option[champ.valeurOption ?? "id"])} value={String(option[champ.valeurOption ?? "id"])}>{String(lire(option, champ.etiquetteOption ?? "nom"))}</option>)}</select> : champ.type === "password" ? <ChampMotDePasse autoComplete="new-password" className={classe} {...formulaire.register(champ.nom)}/> : <input type={champ.type ?? "text"} step={champ.type === "number" ? "any" : undefined} className={classe} {...formulaire.register(champ.nom, { valueAsNumber: champ.type === "number" })}/>} {erreur && <span className="mt-1 block text-xs text-red-600">{String(erreur)}</span>}
  </label>;
}
