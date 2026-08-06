export const typesDocuments = ["CARTE_IDENTITE", "PHOTO_IDENTITE", "RELEVE_NOTES", "ATTESTATION_INSCRIPTION", "LETTRE_MOTIVATION", "RECOMMANDATION", "AUTRE"] as const;
export type TypeDocumentMetier = typeof typesDocuments[number];
export type EtatDocument = "A_VERIFIER" | "VALIDE" | "REJETE" | "REMPLACEMENT_DEMANDE";

export const libellesTypesDocuments: Record<TypeDocumentMetier, string> = {
  CARTE_IDENTITE: "Carte d’identité",
  PHOTO_IDENTITE: "Photo d’identité",
  RELEVE_NOTES: "Relevé de notes",
  ATTESTATION_INSCRIPTION: "Attestation d’inscription",
  LETTRE_MOTIVATION: "Lettre de motivation",
  RECOMMANDATION: "Lettre de recommandation",
  AUTRE: "Autre document",
};

const marqueurs: Record<Exclude<EtatDocument, "A_VERIFIER" | "VALIDE">, string> = {
  REJETE: "[REJETE] ",
  REMPLACEMENT_DEMANDE: "[REMPLACEMENT_DEMANDE] ",
};

export function encoderVerification(etat: EtatDocument, motif?: string | null) {
  if (etat === "VALIDE") return { estValide: true, commentaire: null };
  if (etat === "A_VERIFIER") return { estValide: false, commentaire: null };
  return { estValide: false, commentaire: `${marqueurs[etat]}${motif?.trim() ?? ""}` };
}

export function lireVerification(estValide: boolean, commentaire?: string | null): { etat: EtatDocument; motif: string | null } {
  if (estValide) return { etat: "VALIDE", motif: null };
  for (const [etat, marqueur] of Object.entries(marqueurs)) {
    if (commentaire?.startsWith(marqueur)) return { etat: etat as EtatDocument, motif: commentaire.slice(marqueur.length) || null };
  }
  return { etat: "A_VERIFIER", motif: commentaire ?? null };
}
