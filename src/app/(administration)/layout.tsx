import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { BarreLaterale } from "@/components/disposition/barre-laterale";
import { Entete } from "@/components/disposition/entete";

export default async function LayoutAdministration({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/connexion");
  return <div className="min-h-screen"><BarreLaterale/><div className="ml-72 min-h-screen"><Entete/><main className="p-6">{children}</main></div></div>;
}
