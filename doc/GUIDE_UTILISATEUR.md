# Guide utilisateur

## Connexion et compte

L’utilisateur se connecte depuis `/connexion`. Un étudiant peut créer son compte depuis `/inscription`. Le mot de passe peut être affiché temporairement avec le bouton prévu dans le champ, puis modifié depuis **Mon compte**. Un administrateur peut imposer son renouvellement.

## Rôles

- `SUPER_ADMINISTRATEUR` : administration complète, utilisateurs, paramètres, audit et données métier.
- `ADMINISTRATEUR` : administration opérationnelle et supervision des dossiers.
- `GESTIONNAIRE_BOURSES` : programmes, appels, vérification, décisions, attributions et suivi.
- `EVALUATEUR` : consultation des dossiers assignés et saisie des évaluations autorisées.
- `COMPTABLE` : consultation des attributions, enregistrement des paiements et preuves.
- `ETUDIANT` : profil, candidatures personnelles et documents associés.

Les pages, actions et routes API sont filtrées côté serveur selon ces autorisations.

## Parcours d’une bourse

1. L’administration enregistre les établissements et crée un programme. Son code est généré automatiquement.
2. Le gestionnaire crée et publie un appel. Sa référence est générée automatiquement ; les pièces requises et critères d’évaluation sont configurables.
3. L’étudiant dépose une candidature. Sa référence est générée par le serveur et le score final n’est jamais saisi par l’étudiant.
4. L’étudiant téléverse les pièces demandées. Les fichiers sont privés, consultables ou téléchargeables par les personnes autorisées et supprimables tant que le workflow le permet.
5. Le gestionnaire vérifie le dossier et assigne les évaluateurs.
6. L’évaluateur renseigne les critères. Le score pondéré est calculé automatiquement.
7. Le gestionnaire ou l’administrateur formalise la décision et peut imprimer l’avis.
8. Une décision favorable permet la création de l’attribution et de son échéancier.
9. Le comptable enregistre les paiements et leurs preuves, dans la limite du montant attribué et de la devise prévue.
10. L’attribution peut être renouvelée, suspendue, réactivée ou clôturée avec traçabilité.

## Consultation des données

Les tableaux sont responsives et défilent horizontalement sur petit écran. La recherche se déclenche automatiquement pendant la saisie. Le menu à trois points présente uniquement les actions disponibles pour le rôle et reste visible au-dessus de la zone défilante.

## Pilotage

Le tableau de bord présente les statistiques, dossiers récents, alertes, échéances et paiements provenant de la base. Les rapports sont filtrables et peuvent être exportés en CSV ou imprimés/enregistrés en PDF avec la boîte de dialogue du navigateur.

Le centre de notifications regroupe les événements importants. Le journal d’audit permet aux administrateurs autorisés de retrouver les actions sensibles.

## Identité visuelle

Le super-administrateur peut remplacer ou restaurer le logo depuis **Paramètres**. Le fichier est stocké dans Vercel Blob ; `BLOB_READ_WRITE_TOKEN` doit donc être défini dans l’environnement déployé.

