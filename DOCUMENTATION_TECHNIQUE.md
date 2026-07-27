# Documentation technique

## Architecture

Architecture client-serveur à trois couches, monolithique full-stack et basée sur des API REST internes.

- Présentation : Next.js App Router, React, Tailwind CSS.
- Métier : composants serveur/client et routes `/api/*`.
- Données : Prisma ORM avec MySQL/MariaDB.
- Sécurité : Auth.js Credentials, JWT et bcryptjs.

## Modèle principal

Utilisateur, Étudiant, Établissement, ProgrammeBourse, AppelCandidature, Candidature, DocumentCandidature, Evaluation, AttributionBourse, Paiement, Renouvellement, Notification et Parametre.

## Règles de gestion

- Un étudiant ne peut déposer qu’une candidature par appel.
- Une candidature retenue peut produire une seule attribution.
- Un évaluateur ne peut évaluer qu’une seule fois la même candidature.
- Une attribution peut avoir plusieurs paiements.
- Une attribution ne peut avoir qu’un renouvellement par année académique.
