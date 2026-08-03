"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { BarChart3, BadgeDollarSign, Building2, ChevronLeft, ChevronRight, ClipboardCheck, Files, GraduationCap, LayoutDashboard, LogOut, Menu, Megaphone, RefreshCw, Settings, Users, WalletCards, X } from "lucide-react";
import type { RoleUtilisateur } from "@/generated/prisma/client";

const liens = [
  { href: "/tableau-de-bord", libelle: "Tableau de bord", icone: LayoutDashboard },
  { href: "/etudiants", libelle: "Étudiants", icone: GraduationCap, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES"] },
  { href: "/etablissements", libelle: "Établissements", icone: Building2, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES"] },
  { href: "/programmes", libelle: "Programmes", icone: BadgeDollarSign },
  { href: "/appels", libelle: "Appels à candidatures", icone: Megaphone },
  { href: "/candidatures", libelle: "Candidatures", icone: Files },
  { href: "/evaluations", libelle: "Évaluations", icone: ClipboardCheck, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "EVALUATEUR"] },
  { href: "/attributions", libelle: "Attributions", icone: BadgeDollarSign },
  { href: "/paiements", libelle: "Paiements", icone: WalletCards, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "COMPTABLE", "ETUDIANT"] },
  { href: "/renouvellements", libelle: "Renouvellements", icone: RefreshCw },
  { href: "/rapports", libelle: "Rapports", icone: BarChart3, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "COMPTABLE"] },
  { href: "/utilisateurs", libelle: "Utilisateurs", icone: Users, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"] },
  { href: "/parametres", libelle: "Paramètres", icone: Settings, roles: ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"] },
] satisfies { href: string; libelle: string; icone: typeof Menu; roles?: RoleUtilisateur[] }[];

const ContexteUtilisateur = createContext<{ nom: string; role: RoleUtilisateur } | null>(null);
export function useUtilisateurConnecte() { const contexte = useContext(ContexteUtilisateur); if (!contexte) throw new Error("Utilisateur indisponible."); return contexte; }

export function CoquilleAdministration({ children, utilisateur }: { children: React.ReactNode; utilisateur: { nom: string; role: RoleUtilisateur } }) {
  const chemin = usePathname();
  const [mobileOuvert, setMobileOuvert] = useState(false);
  const [large, setLarge] = useState(true);
  const liensVisibles = liens.filter(lien => !lien.roles || (lien.roles as readonly RoleUtilisateur[]).includes(utilisateur.role));

  const navigation = <><div className="flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold">ESU</div>{large && <div className="min-w-0"><p className="truncate font-bold">Gestion des bourses</p><p className="truncate text-xs text-slate-400">Ministère de l’ESU</p></div>}<button onClick={() => setMobileOuvert(false)} className="ml-auto rounded-lg p-2 lg:hidden"><X className="size-5"/></button></div><nav className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain p-3">{liensVisibles.map(({ href, libelle, icone: Icone }) => { const actif = chemin === href || chemin.startsWith(`${href}/`); return <Link title={!large ? libelle : undefined} onClick={() => setMobileOuvert(false)} key={href} href={href} className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm transition ${actif ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}><Icone className="size-5 shrink-0"/>{large && <span>{libelle}</span>}</Link>; })}</nav></>;

  return <ContexteUtilisateur.Provider value={utilisateur}><div className="min-h-screen bg-slate-50">
    {mobileOuvert && <button aria-label="Fermer le menu" onClick={() => setMobileOuvert(false)} className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"/>}
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-hidden bg-slate-950 text-white transition-transform lg:hidden ${mobileOuvert ? "translate-x-0" : "-translate-x-full"}`}>{navigation}</aside>
    <aside className={`fixed inset-y-0 left-0 z-40 hidden flex-col overflow-hidden bg-slate-950 text-white transition-[width] lg:flex ${large ? "w-72" : "w-20"}`}>{navigation}<button onClick={() => setLarge(v => !v)} className="absolute -right-3 top-20 rounded-full border bg-white p-1.5 text-slate-700 shadow">{large ? <ChevronLeft className="size-4"/> : <ChevronRight className="size-4"/>}</button></aside>
    <div className={`min-h-screen transition-[margin] ${large ? "lg:ml-72" : "lg:ml-20"}`}>
      <header className="sticky top-0 z-30 flex min-h-16 items-center gap-3 border-b bg-white/95 px-3 backdrop-blur sm:px-6"><button onClick={() => setMobileOuvert(true)} className="rounded-lg border p-2 lg:hidden"><Menu className="size-5"/></button><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Ministère de l’Enseignement supérieur et universitaire</p><p className="hidden truncate text-xs text-slate-500 sm:block">Système national de gestion des bourses d’études</p></div><div className="hidden text-right sm:block"><p className="max-w-44 truncate text-sm font-medium">{utilisateur.nom}</p><p className="text-xs text-slate-500">{utilisateur.role.replaceAll("_", " ")}</p></div><button onClick={() => signOut({ callbackUrl: "/connexion" })} title="Déconnexion" className="inline-flex min-h-10 items-center gap-2 rounded-xl border px-3 text-sm hover:bg-slate-50"><LogOut className="size-4"/><span className="hidden md:inline">Déconnexion</span></button></header>
      <main className="p-3 sm:p-6">{children}</main>
    </div>
  </div></ContexteUtilisateur.Provider>;
}
