# Documentation technique

## Architecture

L’application est un monolithe full-stack organisé autour de Next.js App Router :

- interface : composants serveur et client React, Tailwind CSS et Base UI ;
- validation : Zod et React Hook Form ;
- métier : services réutilisables et routes internes `/api/*` ;
- données : Prisma 7, adaptateur MariaDB et MySQL/MariaDB ;
- sécurité : Auth.js Credentials, JWT, hachage bcryptjs et contrôle des permissions côté serveur ;
- fichiers : objets privés Vercel Blob servis par des routes autorisées.

## Domaines couverts

Le modèle traite notamment les utilisateurs, étudiants, établissements, programmes, appels, candidatures, documents requis et déposés, critères, affectations et évaluations, décisions, attributions, échéanciers, paiements, renouvellements, notifications, paramètres et journal d’audit.

## Principales règles métier

- Les références fonctionnelles sont générées sur le serveur et protégées par des contraintes uniques.
- Un étudiant ne dépose qu’une candidature par appel.
- Le dépôt et la modification des pièces respectent l’état du dossier et les permissions.
- Un évaluateur ne note que les dossiers qui lui sont affectés.
- Le score final provient des évaluations pondérées ; il n’est pas saisi par l’étudiant.
- Une décision formelle conserve son historique.
- Une candidature acceptée ne produit qu’une attribution active cohérente.
- Les paiements ne peuvent dépasser le montant attribué et utilisent sa devise.
- Les renouvellements et changements d’état sont historisés.

## Sécurité et exploitation

Les mots de passe sont toujours hachés. Les échecs de connexion peuvent verrouiller temporairement un compte et le renouvellement du mot de passe peut être imposé. Les routes métier vérifient la session et les permissions, indépendamment de l’affichage de l’interface.

Les documents, preuves de paiement et logos sont stockés dans Vercel Blob. Les documents privés sont récupérés par des routes qui contrôlent l’accès avant de transmettre le contenu. Aucun fichier persistant n’est écrit dans `public` ni sur le disque éphémère de Vercel.

## Qualité et déploiement

Le projet fournit la génération Prisma en `postinstall`, des contrôles TypeScript, des tests de règles métier et un build Next.js de production. Une modification Prisma doit être appliquée après sauvegarde avec une opération additive adaptée ; aucune réinitialisation destructive ne doit être exécutée sans autorisation explicite.

## Limite connue

Le centre de notifications interne est opérationnel, mais aucun fournisseur d’e-mails transactionnels n’est configuré. Cette intégration pourra être ajoutée sans modifier le workflow métier principal.

