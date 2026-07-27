# Gestion des bourses d’études — Ministère de l’ESU

Projet académique complet réalisé avec Next.js, TypeScript, Auth.js, Prisma et MySQL/MariaDB.

## Installation rapide

1. Copier `.env.example` vers `.env`.
2. Créer la base `gestion_bourses_esu` dans MySQL.
3. Exécuter :

```bash
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Comptes de démonstration

- Administrateur : `admin@esu.cd` / `Admin@123`
- Étudiant : `etudiant@esu.cd` / `Admin@123`

## Modules inclus

Tableau de bord, étudiants, établissements, programmes, appels, candidatures, attributions, paiements, rapports, utilisateurs et paramètres.

## Remarque

Le projet est un MVP académique. Les écrans de listes et les API de lecture sont fonctionnels. Les opérations CRUD avancées, l’upload réel des pièces et le workflow de paiement externe peuvent être étendus selon les exigences de l’institution.
