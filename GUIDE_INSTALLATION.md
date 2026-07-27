# Guide d’installation

## Prérequis

- Node.js 20 ou supérieur
- MySQL 8 ou MariaDB 10.6+
- npm

## Étapes

1. Décompresser le projet.
2. Ouvrir le dossier dans VS Code.
3. Créer une base de données nommée `gestion_bourses_esu`.
4. Copier `.env.example` vers `.env` et adapter `DATABASE_URL`.
5. Exécuter `npm install`.
6. Exécuter `npx prisma generate`.
7. Exécuter `npx prisma db push`.
8. Exécuter `npm run seed`.
9. Exécuter `npm run dev`.

## Vérification

- `npx tsc --noEmit`
- `npm run build`
