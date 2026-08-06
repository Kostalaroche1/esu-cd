type PrefixeReference = "CAND" | "APP" | "PRG";

/** Génère une référence métier lisible, non prédictible et suffisamment unique. */
export function genererReferenceMetier(prefixe: PrefixeReference) {
  const annee = new Date().getFullYear();
  const identifiant = crypto.randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase();
  return `${prefixe}-${annee}-${identifiant}`;
}
