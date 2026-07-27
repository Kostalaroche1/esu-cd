"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, GraduationCap, Building2, Megaphone, Files, BadgeDollarSign, WalletCards, BarChart3, Users, Settings } from "lucide-react";

const liens = [
  ["/tableau-de-bord", "Tableau de bord", LayoutDashboard],
  ["/etudiants", "Étudiants", GraduationCap],
  ["/etablissements", "Établissements", Building2],
  ["/programmes", "Programmes", BadgeDollarSign],
  ["/appels", "Appels à candidatures", Megaphone],
  ["/candidatures", "Candidatures", Files],
  ["/attributions", "Attributions", BadgeDollarSign],
  ["/paiements", "Paiements", WalletCards],
  ["/rapports", "Rapports", BarChart3],
  ["/utilisateurs", "Utilisateurs", Users],
  ["/parametres", "Paramètres", Settings],
] as const;

export function BarreLaterale() {
  const chemin = usePathname();
  return <aside className="fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-slate-950 p-4 text-white">
    <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5"><div className="flex size-11 items-center justify-center rounded-xl bg-white font-bold text-blue-700">ESU</div><div><p className="font-bold">Gestion des bourses</p><p className="text-xs text-slate-400">Ministère de l’ESU</p></div></div>
    <nav className="space-y-1">{liens.map(([href, libelle, Icone])=>{const actif=chemin===href||chemin.startsWith(`${href}/`); return <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${actif?"bg-white text-slate-950":"text-slate-300 hover:bg-white/10 hover:text-white"}`}><Icone className="size-5"/>{libelle}</Link>})}</nav>
  </aside>;
}
