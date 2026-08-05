import { GestionModule } from "@/components/partages/gestion-module";
import { GestionLogoEsu } from "@/components/parametres/gestion-logo-esu";

export default function Page() {
  return <div className="space-y-6"><GestionLogoEsu/><GestionModule module="parametres"/></div>;
}
