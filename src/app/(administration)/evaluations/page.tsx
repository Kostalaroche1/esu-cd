import { auth } from "@/auth";
import { EspaceEvaluateur } from "@/components/evaluations/espace-evaluateur";
import { GestionModule } from "@/components/partages/gestion-module";
export default async function Page(){const session=await auth();return session?.user.role==="EVALUATEUR"?<EspaceEvaluateur/>:<GestionModule module="evaluations"/>}
