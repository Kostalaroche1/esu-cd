import { auth, signOut } from "@/auth";
export async function Entete() {
  const session = await auth();
  return <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6"><div><p className="text-sm font-semibold">Ministère de l’Enseignement supérieur et universitaire</p><p className="text-xs text-slate-500">Système de gestion des bourses d’études</p></div><div className="flex items-center gap-4"><div className="text-right"><p className="text-sm font-medium">{session?.user?.name}</p><p className="text-xs text-slate-500">{session?.user?.role}</p></div><form action={async()=>{"use server"; await signOut({redirectTo:"/connexion"})}}><button className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">Déconnexion</button></form></div></header>
}
