import { z } from "zod";

export const schemaSaisieEvaluation = z.object({
  decision: z.enum(["FAVORABLE", "DEFAVORABLE", "A_REVOIR"]),
  commentaire: z.string().trim().max(5000).optional().nullable(),
  notes: z.array(z.object({ critereId: z.string().min(1), note: z.coerce.number().min(0), commentaire: z.string().trim().max(2000).optional().nullable() })).min(1),
});

export function calculerNotePonderee(notes: { note: number; noteMaximale: number; ponderation: number }[]) {
  const poids = notes.reduce((total, item) => total + item.ponderation, 0);
  if (poids <= 0) throw new Error("La pondération totale doit être supérieure à zéro.");
  return notes.reduce((total, item) => total + (item.note / item.noteMaximale) * 100 * item.ponderation, 0) / poids;
}
