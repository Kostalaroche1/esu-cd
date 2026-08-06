import { z } from "zod";
import type { ActionMetier } from "@/lib/autorisations";

const texte = z.string().trim().min(1, "Ce champ est obligatoire.");
const optionnel = z.string().trim().optional().nullable();
const booleen = z.coerce.boolean().optional();
const date = z.coerce.date();
const nombre = z.coerce.number();

export const schemasModules = {
  etablissements: z.object({ nom: texte, sigle: optionnel, province: optionnel, ville: optionnel, type: optionnel, estActif: booleen }),
  etudiants: z.object({ matricule: texte, nom: texte, postnom: optionnel, prenom: texte, sexe: optionnel, dateNaissance: z.coerce.date().optional().nullable(), telephone: optionnel, email: z.string().email().optional().or(z.literal("")), adresse: optionnel, provinceOrigine: optionnel, niveauEtude: optionnel, filiere: optionnel, anneeAcademique: optionnel, etablissementId: texte, estActif: booleen }),
  programmes: z.object({ nom: texte, description: optionnel, organismeFinanceur: optionnel, montantMaximum: nombre.optional().nullable(), devise: texte.default("USD"), niveauCible: optionnel, domaineCible: optionnel, estActif: booleen }),
  appels: z.object({ titre: texte, description: optionnel, dateOuverture: date, dateCloture: date, nombrePlaces: z.coerce.number().int().positive().optional().nullable(), criteresEligibilite: optionnel, estPublie: booleen, programmeId: texte }).refine(v => v.dateCloture >= v.dateOuverture, { message: "La clôture doit suivre l’ouverture.", path: ["dateCloture"] }),
  candidatures: z.object({ motivation: optionnel, statut: z.enum(["BROUILLON", "SOUMISE", "EN_VERIFICATION", "ELIGIBLE", "NON_ELIGIBLE", "EN_EVALUATION", "RETENUE", "REJETEE", "ANNULEE"]).optional(), scoreFinal: nombre.min(0).max(100).optional().nullable(), commentaire: optionnel, etudiantId: texte.optional(), appelId: texte }),
  evaluations: z.object({ decision: z.enum(["FAVORABLE", "DEFAVORABLE", "A_REVOIR"]).optional().nullable(), commentaire: optionnel, statut: z.enum(["ASSIGNEE", "EN_COURS", "TERMINEE"]).optional(), dateEcheance: z.coerce.date().optional().nullable(), candidatureId: texte, evaluateurId: texte }),
  attributions: z.object({ reference: texte, montantAccorde: nombre.positive(), devise: texte.default("USD"), dateDebut: date, dateFin: date, statut: z.enum(["ACTIVE", "SUSPENDUE", "TERMINEE", "ANNULEE"]).optional(), candidatureId: texte, etudiantId: texte }).refine(v => v.dateFin >= v.dateDebut, { message: "La fin doit suivre le début.", path: ["dateFin"] }),
  paiements: z.object({ periode: texte, montant: nombre.positive(), devise: texte.default("USD"), datePrevue: date, datePaiement: z.coerce.date().optional().nullable(), statut: z.enum(["PREVU", "EFFECTUE", "ECHEC", "ANNULE"]).optional(), modePaiement: optionnel, attributionId: texte }),
  renouvellements: z.object({ anneeAcademique: texte, decision: z.enum(["RENOUVELEE", "SUSPENDUE", "REACTIVEE", "CLOTUREE", "ANNULEE"]), commentaire: optionnel, dateDebutSuspension: z.coerce.date().optional().nullable(), dateFinSuspension: z.coerce.date().optional().nullable(), attributionId: texte }).refine(v => v.decision !== "SUSPENDUE" || Boolean(v.dateDebutSuspension), { message: "La date de début de suspension est obligatoire.", path: ["dateDebutSuspension"] }),
  utilisateurs: z.object({ nomComplet: texte, email: z.string().trim().email(), motDePasse: z.string().min(8).optional(), role: z.enum(["SUPER_ADMINISTRATEUR", "ADMINISTRATEUR", "GESTIONNAIRE_BOURSES", "EVALUATEUR", "COMPTABLE", "ETUDIANT"]), estActif: booleen, etudiantId: optionnel }),
  parametres: z.object({ cle: texte.regex(/^[a-zA-Z][a-zA-Z0-9_.-]*$/, "Clé invalide."), valeur: texte }),
} as const;

export type NomModule = keyof typeof schemasModules;

type ConfigurationModule = {
  modele: string;
  recherche: string[];
  include?: Record<string, unknown>;
  select?: Record<string, unknown>;
  actionCreation?: ActionMetier;
  actionModification?: ActionMetier;
};

export const configurationsModules: Record<NomModule, ConfigurationModule> = {
  etablissements: { modele: "etablissement", recherche: ["nom", "sigle", "province", "ville"] },
  etudiants: { modele: "etudiant", recherche: ["matricule", "nom", "postnom", "prenom", "email"], include: { etablissement: { select: { id: true, nom: true } } } },
  programmes: { modele: "programmeBourse", recherche: ["code", "nom", "organismeFinanceur"] },
  appels: { modele: "appelCandidature", recherche: ["reference", "titre"], include: { programme: { select: { id: true, nom: true } } } },
  candidatures: { modele: "candidature", recherche: ["reference", "statut"], include: { etudiant: { select: { id: true, nom: true, prenom: true, matricule: true } }, appel: { select: { id: true, titre: true } }, _count: { select: { documents: true, evaluations: true } } } },
  evaluations: { modele: "evaluation", recherche: ["decision", "commentaire"], include: { candidature: { select: { id: true, reference: true } }, evaluateur: { select: { id: true, nomComplet: true } } }, actionCreation: "evaluer", actionModification: "evaluer" },
  attributions: { modele: "attributionBourse", recherche: ["reference", "statut"], include: { etudiant: { select: { id: true, nom: true, prenom: true } }, candidature: { select: { id: true, reference: true } } }, actionCreation: "decider", actionModification: "decider" },
  paiements: { modele: "paiement", recherche: ["reference", "periode", "statut"], include: { attribution: { select: { id: true, reference: true, etudiant: { select: { nom: true, prenom: true } } } } }, actionCreation: "payer", actionModification: "payer" },
  renouvellements: { modele: "renouvellement", recherche: ["anneeAcademique", "decision"], include: { attribution: { select: { id: true, reference: true } } }, actionCreation: "decider", actionModification: "decider" },
  utilisateurs: { modele: "utilisateur", recherche: ["nomComplet", "email", "role"], select: { id: true, nomComplet: true, email: true, role: true, estActif: true, etudiantId: true, creeLe: true, modifieLe: true }, actionCreation: "parametrer", actionModification: "parametrer" },
  parametres: { modele: "parametre", recherche: ["cle", "valeur"], actionCreation: "parametrer", actionModification: "parametrer" },
};

export function estNomModule(valeur: string): valeur is NomModule {
  return valeur in configurationsModules;
}
