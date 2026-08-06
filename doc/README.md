# Gestion des bourses d’études — Ministère de l’ESU

Application web de gestion du cycle complet des bourses d’études : publication des appels, candidatures, documents, vérification, évaluation, décision, attribution, paiements et suivi administratif.

## Technologies

- Next.js 16 App Router et React 19 ;
- TypeScript, Tailwind CSS et composants Base UI ;
- Auth.js v5 avec Credentials et sessions JWT ;
- Prisma 7 avec MySQL/MariaDB et `@prisma/adapter-mariadb` ;
- Vercel Blob privé pour les documents et le logo ;
- Zod, React Hook Form et Sonner.

## Documentation

- [Guide d’installation](GUIDE_INSTALLATION.md)
- [Guide utilisateur](GUIDE_UTILISATEUR.md)
- [Documentation technique](DOCUMENTATION_TECHNIQUE.md)
- [Trame de monographie](DOCUMENTATION_MONOGRAPHIE.md)

## État fonctionnel

Les écrans métier utilisent les routes `/api/*` et les données Prisma. Les références des programmes, appels et candidatures sont générées par le serveur. Les accès sont contrôlés selon le rôle, les documents sont privés et les actions sensibles sont journalisées.

L’envoi d’e-mails n’est pas encore intégré. Les informations et alertes restent disponibles dans le centre de notifications de l’application.

