import { GestionModule } from "@/components/partages/gestion-module";
import { GestionPreuvesPaiement } from "@/components/paiements/gestion-preuves-paiement";
export default function Page(){return <div className="space-y-6"><GestionModule module="paiements"/><GestionPreuvesPaiement/></div>}
