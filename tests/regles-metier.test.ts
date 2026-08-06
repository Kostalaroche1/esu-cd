import assert from "node:assert/strict";
import test from "node:test";
import { calculerNotePonderee } from "../src/lib/calcul-evaluation";
import { genererReferenceMetier } from "../src/lib/references-metier";
import { encoderVerification, lireVerification } from "../src/lib/workflow-documents";

test("la note pondérée respecte les notes maximales et les poids", () => {
  const note = calculerNotePonderee([
    { note: 80, noteMaximale: 100, ponderation: 2 },
    { note: 10, noteMaximale: 20, ponderation: 1 },
  ]);
  assert.equal(Number(note.toFixed(2)), 70);
});

test("les références métier sont lisibles et distinctes", () => {
  const premiere = genererReferenceMetier("CAND");
  const seconde = genererReferenceMetier("CAND");
  assert.match(premiere, /^CAND-\d{4}-[A-F0-9]{8}$/);
  assert.notEqual(premiere, seconde);
});

test("un rejet documentaire conserve son motif", () => {
  const donnees = encoderVerification("REJETE", "Document illisible");
  assert.deepEqual(lireVerification(donnees.estValide, donnees.commentaire, donnees.statutVerification, donnees.motifVerification), { etat: "REJETE", motif: "Document illisible" });
});
