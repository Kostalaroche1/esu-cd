import { GestionModule } from "@/components/partages/gestion-module";
import { ConfigurationDocumentsRequis } from "@/components/appels/configuration-documents-requis";
import { ConfigurationCriteresEvaluation } from "@/components/appels/configuration-criteres-evaluation";
export default function Page(){return <div className="space-y-6"><GestionModule module="appels"/><ConfigurationDocumentsRequis/><ConfigurationCriteresEvaluation/></div>}
