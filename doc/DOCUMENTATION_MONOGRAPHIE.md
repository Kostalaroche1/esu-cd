# Trame de monographie

## Sujet

**Implantation d’un système d’information informatisé pour la gestion des bourses d’études : cas du Ministère de l’Enseignement supérieur et universitaire.**

## Problématique

La gestion manuelle ou dispersée des candidatures entraîne des lenteurs, doublons, difficultés de suivi et un manque de visibilité sur les décisions et paiements. Le projet étudie comment une application centralisée peut améliorer la fiabilité, la rapidité, la traçabilité et la transparence du processus.

## Hypothèse et objectif

Une plateforme web sécurisée, reliée à une base relationnelle et fondée sur un workflow contrôlé, améliore le traitement des candidatures, la sélection des bénéficiaires, le suivi financier et la production des rapports.

L’objectif général est de concevoir et réaliser ce système. Les objectifs spécifiques sont de centraliser les acteurs, publier les appels, recevoir et vérifier les dossiers, évaluer les candidats, formaliser les décisions, suivre les attributions et paiements, puis produire des rapports exploitables.

## Plan conseillé

### Chapitre I — Cadre théorique et technologique

Présenter les systèmes d’information, bases de données, bourses, candidatures, authentification, contrôle d’accès, API, Next.js, Prisma, MySQL/MariaDB et stockage objet.

### Chapitre II — Analyse et conception

Décrire les six rôles, les besoins fonctionnels, les règles métier, cas d’utilisation, séquences, modèle de données, contraintes d’intégrité et exigences de sécurité.

### Chapitre III — Réalisation

Documenter l’architecture, Auth.js, Prisma, les routes API, le stockage privé Vercel Blob, les modules réalisés, le workflow complet, la responsivité, l’audit, les rapports et les tests.

### Chapitre IV — Validation et résultats

Présenter les scénarios testés : inscription, candidature, pièces obligatoires, évaluation pondérée, décision, attribution, paiement, renouvellement et contrôle des rôles. Ajouter les résultats de `prisma generate`, TypeScript, des tests automatisés et du build de production.

## Limites et perspectives

Les limites externes comprennent l’absence actuelle d’envoi d’e-mails, l’intégration bancaire non réalisée et la nécessité d’une validation institutionnelle des règles et données de production. Les notifications internes, l’audit et l’export des rapports sont déjà couverts.

## Conclusion

La solution constitue une application opérationnelle et déployable pour gérer le cycle d’une bourse. Sa structure modulaire permet d’ajouter ultérieurement les e-mails transactionnels ou une intégration bancaire sans remettre en cause les fonctions principales.
