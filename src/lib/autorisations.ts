import type { RoleUtilisateur } from "@/generated/prisma/client";

export type ActionMetier = "lire" | "creer" | "modifier" | "supprimer" | "evaluer" | "decider" | "payer" | "parametrer";

const droits: Record<RoleUtilisateur, readonly ActionMetier[]> = {
  SUPER_ADMINISTRATEUR: ["lire", "creer", "modifier", "supprimer", "evaluer", "decider", "payer", "parametrer"],
  ADMINISTRATEUR: ["lire", "creer", "modifier", "evaluer", "decider", "payer", "parametrer"],
  GESTIONNAIRE_BOURSES: ["lire", "creer", "modifier", "evaluer", "decider"],
  EVALUATEUR: ["lire", "evaluer"],
  COMPTABLE: ["lire", "payer"],
  ETUDIANT: ["lire", "creer", "modifier"],
};

export function peut(role: RoleUtilisateur, action: ActionMetier) {
  return droits[role].includes(action);
}

export const rolesAdministration: RoleUtilisateur[] = ["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR"];
