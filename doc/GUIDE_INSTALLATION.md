# Guide d’installation et de déploiement

## Prérequis

- Node.js 22.x ;
- npm ;
- MySQL 8 ou MariaDB 10.6+ ;
- un magasin Vercel Blob pour les fichiers persistants.

## Variables d’environnement

Copier `.env.example` vers `.env`, puis renseigner :

| Variable | Usage |
| --- | --- |
| `DATABASE_URL` | Connexion MySQL/MariaDB. Les caractères spéciaux du mot de passe doivent être encodés dans l’URL. |
| `AUTH_SECRET` | Secret long et aléatoire utilisé par Auth.js. |
| `AUTH_URL` | URL publique de l’application, par exemple `https://votre-projet.vercel.app`. |
| `BLOB_READ_WRITE_TOKEN` | Jeton du magasin Vercel Blob, requis pour les documents, preuves de paiement et logos. |
| `ADMIN_INITIAL_NOM` | Nom du super-administrateur créé par le seed. |
| `ADMIN_INITIAL_EMAIL` | Adresse de connexion initiale. |
| `ADMIN_INITIAL_MOT_DE_PASSE` | Mot de passe initial d’au moins 12 caractères, utilisé uniquement par le seed. |

Les trois variables `ADMIN_INITIAL_*` ne sont nécessaires que pendant `npm run seed`. Ne jamais mettre leurs valeurs réelles dans Git.

## Installation locale

```bash
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```

Ouvrir ensuite `http://localhost:3000`. `prisma db push` est non destructif dans le déroulement normal, mais une sauvegarde de la base est recommandée avant toute modification de schéma en production.

## Vérification avant livraison

```bash
npx prisma generate
npx tsc --noEmit
npm test
npm run build
```

## Déploiement Vercel

1. Importer le dépôt dans Vercel en conservant le preset Next.js.
2. Ne pas définir `public` comme répertoire de sortie : Next.js gère lui-même la sortie du build.
3. Créer ou associer un magasin Vercel Blob.
4. Ajouter toutes les variables d’environnement dans les paramètres du projet.
5. Sauvegarder la base Alwaysdata, puis exécuter `npx prisma db push` depuis un environnement autorisé si le schéma a changé.
6. Déployer. Le script `postinstall` exécute automatiquement `prisma generate`.

Le système de fichiers Vercel n’est jamais utilisé pour un stockage persistant.

