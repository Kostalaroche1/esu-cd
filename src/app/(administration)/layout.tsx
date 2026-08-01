import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { CoquilleAdministration } from "@/components/disposition/coquille-administration";

export default async function LayoutAdministration({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/connexion");
  return <CoquilleAdministration utilisateur={{ nom: session.user.name ?? session.user.email ?? "Utilisateur", role: session.user.role }}>{children}</CoquilleAdministration>;
}
