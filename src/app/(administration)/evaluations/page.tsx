import { auth } from "@/auth";
import { EspaceEvaluateur } from "@/components/evaluations/espace-evaluateur";
import { GestionModule } from "@/components/partages/gestion-module";

export default async function Page() {
  const session = await auth();
  if (session?.user.role === "EVALUATEUR") return <EspaceEvaluateur/>;

  return <div className="space-y-10">
    <GestionModule module="evaluations"/>
    <EspaceEvaluateur/>
  </div>;
}
