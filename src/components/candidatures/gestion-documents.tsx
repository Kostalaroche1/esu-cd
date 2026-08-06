"use client";

import { Dialog } from "@base-ui/react/dialog";
import { CheckCircle2, Download, Eye, FileText, RotateCcw, Trash2, Upload, X, XCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useUtilisateurConnecte } from "@/components/disposition/coquille-administration";
import { libellesTypesDocuments, lireVerification, typesDocuments, type EtatDocument, type TypeDocumentMetier } from "@/lib/workflow-documents";

type DocumentCandidature = { id: string; type: TypeDocumentMetier; nomFichier: string; estValide: boolean; commentaire: string | null; typeMime: string | null; tailleOctets: number | null; creeLe: string };
type Proprietes = { candidatureId: string; reference: string; statutCandidature: string; ouvert: boolean; onOuvertChange: (ouvert: boolean) => void };

const apparenceEtat: Record<EtatDocument, string> = { A_VERIFIER: "bg-amber-50 text-amber-800", VALIDE: "bg-emerald-50 text-emerald-800", REJETE: "bg-red-50 text-red-700", REMPLACEMENT_DEMANDE: "bg-orange-50 text-orange-800" };
const libelleEtat: Record<EtatDocument, string> = { A_VERIFIER: "À vérifier", VALIDE: "Validé", REJETE: "Rejeté", REMPLACEMENT_DEMANDE: "Remplacement demandé" };

export function GestionDocuments({ candidatureId, reference, statutCandidature, ouvert, onOuvertChange }: Proprietes) {
  const utilisateur = useUtilisateurConnecte();
  const [documents, setDocuments] = useState<DocumentCandidature[]>([]);
  const [type, setType] = useState<TypeDocumentMetier>(typesDocuments[0]);
  const [fichier, setFichier] = useState<File | null>(null);
  const [chargement, setChargement] = useState(false);
  const peutTeleverser = ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "ETUDIANT"].includes(utilisateur.role);
  const peutVerifier = ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES"].includes(utilisateur.role);
  const candidatureModifiable = ["BROUILLON", "SOUMISE"].includes(statutCandidature);

  const charger = useCallback(async () => {
    const reponse = await fetch(`/api/candidatures/${candidatureId}/documents`, { cache: "no-store" });
    const resultat = await reponse.json();
    if (reponse.ok) setDocuments(resultat.donnees ?? []); else toast.error(resultat.message);
  }, [candidatureId]);

  useEffect(() => { if (ouvert) void charger(); }, [ouvert, charger]);

  async function televerser(evenement: React.FormEvent) {
    evenement.preventDefault();
    if (!fichier) return toast.error("Choisissez un fichier.");
    setChargement(true);
    const formulaire = new FormData(); formulaire.set("type", type); formulaire.set("fichier", fichier);
    try {
      const reponse = await fetch(`/api/candidatures/${candidatureId}/documents`, { method: "POST", body: formulaire });
      const resultat = await reponse.json();
      if (!reponse.ok) throw new Error(resultat.message);
      toast.success(resultat.message); setFichier(null); await charger();
    } catch (erreur) { toast.error(erreur instanceof Error ? erreur.message : "Le téléversement a échoué."); }
    finally { setChargement(false); }
  }

  async function verifier(id: string, action: "VALIDER" | "REJETER" | "DEMANDER_REMPLACEMENT" | "REINITIALISER") {
    const exigeMotif = action === "REJETER" || action === "DEMANDER_REMPLACEMENT";
    const motif = exigeMotif ? window.prompt(action === "REJETER" ? "Pourquoi ce document est-il rejeté ?" : "Quel document corrigé est attendu ?") : "";
    if (exigeMotif && !motif) return;
    const reponse = await fetch(`/api/documents/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, motif }) });
    const resultat = await reponse.json();
    if (!reponse.ok) return toast.error(resultat.message);
    toast.success(resultat.message); await charger();
  }

  async function supprimer(document: DocumentCandidature) {
    if (!window.confirm(`Supprimer définitivement « ${document.nomFichier} » ?`)) return;
    const reponse = await fetch(`/api/documents/${document.id}`, { method: "DELETE" });
    const resultat = await reponse.json();
    if (!reponse.ok) return toast.error(resultat.message);
    toast.success(resultat.message); await charger();
  }

  return <Dialog.Root open={ouvert} onOpenChange={onOuvertChange}><Dialog.Portal>
    <Dialog.Backdrop className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-sm" />
    <Dialog.Viewport className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-4">
      <Dialog.Popup className="flex max-h-[95vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-w-4xl sm:rounded-2xl">
        <div className="flex shrink-0 items-center justify-between border-b p-4 sm:p-5"><div><Dialog.Title className="font-bold">Documents — {reference}</Dialog.Title><Dialog.Description className="text-sm text-slate-500">Documents privés de la candidature.</Dialog.Description></div><Dialog.Close className="rounded-lg p-2 hover:bg-slate-100"><X className="size-5" /></Dialog.Close></div>
        {peutTeleverser && (utilisateur.role !== "ETUDIANT" || candidatureModifiable) && <form onSubmit={televerser} className="grid shrink-0 gap-3 border-b p-4 sm:grid-cols-[1fr_1.2fr_auto]">
          <select aria-label="Type de document" value={type} onChange={e => setType(e.target.value as TypeDocumentMetier)} className="min-h-11 rounded-xl border px-3">{typesDocuments.map(valeur => <option key={valeur} value={valeur}>{libellesTypesDocuments[valeur]}</option>)}</select>
          <input aria-label="Fichier" accept=".pdf,image/jpeg,image/png,image/webp" type="file" onChange={e => setFichier(e.target.files?.[0] ?? null)} className="min-h-11 min-w-0 rounded-xl border p-2 text-sm" />
          <button disabled={chargement || !fichier} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 text-white disabled:opacity-50"><Upload className="size-4" />{chargement ? "Envoi…" : "Téléverser"}</button>
        </form>}
        <div className="min-h-0 overflow-y-auto divide-y">{documents.length === 0 ? <p className="p-10 text-center text-slate-500">Aucun document téléversé.</p> : documents.map(document => {
          const verification = lireVerification(document.estValide, document.commentaire);
          const peutSupprimer = ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"].includes(utilisateur.role) || (utilisateur.role === "ETUDIANT" && candidatureModifiable && !document.estValide);
          return <article key={document.id} className="p-4 sm:p-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-start"><FileText className="mt-1 size-5 shrink-0 text-blue-700"/><div className="min-w-0 flex-1"><p className="break-all font-medium">{document.nomFichier}</p><p className="mt-1 text-xs text-slate-500">{libellesTypesDocuments[document.type]} · {document.tailleOctets ? `${(document.tailleOctets / 1024).toFixed(0)} Ko` : "Taille inconnue"}</p><span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${apparenceEtat[verification.etat]}`}>{libelleEtat[verification.etat]}</span>{verification.motif && <p className="mt-2 rounded-lg bg-slate-50 p-2 text-sm text-slate-700"><strong>Motif :</strong> {verification.motif}</p>}</div>
            <div className="flex flex-wrap gap-2"><a target="_blank" rel="noreferrer" href={`/api/documents/${document.id}/telecharger?mode=apercu`} className="inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 text-sm hover:bg-slate-50" title="Lire le document"><Eye className="size-4"/><span>Lire</span></a><a href={`/api/documents/${document.id}/telecharger`} className="inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 text-sm hover:bg-slate-50" title="Télécharger"><Download className="size-4"/><span className="sr-only">Télécharger</span></a>{peutSupprimer && <button onClick={() => void supprimer(document)} className="min-h-10 rounded-lg border px-3 text-red-700 hover:bg-red-50" title="Supprimer"><Trash2 className="size-4"/></button>}</div></div>
            {peutVerifier && <div className="mt-3 flex flex-wrap gap-2 border-t pt-3"><button onClick={() => void verifier(document.id, "VALIDER")} className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-emerald-50 px-3 text-sm text-emerald-800"><CheckCircle2 className="size-4"/>Valider</button><button onClick={() => void verifier(document.id, "REJETER")} className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-red-50 px-3 text-sm text-red-700"><XCircle className="size-4"/>Rejeter</button><button onClick={() => void verifier(document.id, "DEMANDER_REMPLACEMENT")} className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-orange-50 px-3 text-sm text-orange-800"><RotateCcw className="size-4"/>Demander un remplacement</button>{verification.etat !== "A_VERIFIER" && <button onClick={() => void verifier(document.id, "REINITIALISER")} className="min-h-9 rounded-lg border px-3 text-sm">Réinitialiser</button>}</div>}
          </article>;
        })}</div>
      </Dialog.Popup>
    </Dialog.Viewport>
  </Dialog.Portal></Dialog.Root>;
}
