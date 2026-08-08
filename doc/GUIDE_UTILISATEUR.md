# Guide utilisateur opérationnel

## 1. But de l’application

L’application organise le parcours complet d’une bourse d’études : le Ministère prépare un programme, publie un appel, reçoit les candidatures, vérifie les documents, fait évaluer les dossiers, prend une décision, attribue la bourse et suit les versements au bénéficiaire.

Il faut distinguer trois notions :

- le **programme de bourse** décrit le financement général, par exemple une bourse nationale d’excellence ;
- l’**appel à candidatures** ouvre ce programme pendant une période précise et indique les places, critères et documents demandés ;
- la **candidature** est le dossier envoyé par un étudiant pour un appel.

## 2. Que signifie « établissement » ?

Dans cette application, l’établissement est l’université ou l’institut supérieur où l’étudiant est actuellement inscrit. Par exemple, si melchack étudie à l’Université de Kinshasa, son établissement est l’Université de Kinshasa.

L’établissement sert à :

- identifier l’origine académique de l’étudiant ;
- rattacher son dossier à une institution reconnue ;
- filtrer les candidatures et rapports par institution ;
- présenter la répartition des bénéficiaires par établissement.

Il ne représente pas automatiquement une université étrangère ou une future destination financée par la bourse. Le modèle actuel contient un seul établissement principal par étudiant. Si le Ministère veut plus tard distinguer **établissement d’origine** et **établissement d’accueil**, il faudra ajouter un champ ou une entité spécifique.

## 3. Qui fait quoi ?

### 3.1 Super-administrateur
    mail:ministere@esu.cd
    password:besu@cd2026-2027
Le `SUPER_ADMINISTRATEUR` contrôle toute l’application. Pour une démonstration, il peut présenter le système dans cet ordre :

1. créer ou vérifier les établissements ;
2. créer les comptes du personnel et attribuer les rôles ;
3. configurer les paramètres et le logo du Ministère ;
4. créer ou superviser les programmes et appels ;
5. consulter tous les étudiants et toutes les candidatures ;
6. vérifier les dossiers, affecter les évaluateurs et formaliser les décisions ;
7. superviser les attributions, paiements et renouvellements ;
8. consulter les rapports, notifications et le journal d’audit ;
9. supprimer un enregistrement lorsque cette suppression est autorisée et ne compromet pas les données liées.

Le super-administrateur intervient surtout pour la configuration, la sécurité, la supervision générale et les opérations exceptionnelles.

### 3.2 Administrateur
 mail:admin@esu.cd
 password:besu@cd2026-2027
L’`ADMINISTRATEUR`
 assure l’administration quotidienne :

- gérer les ressources et comptes autorisés ;
- activer ou désactiver des comptes ;
- associer un compte de rôle `ETUDIANT` à son profil étudiant lorsque le compte est créé par l’administration ;
- superviser programmes, appels et candidatures ;
- participer à la vérification, à l’évaluation et aux décisions ;
- consulter les rapports ;
- intervenir sur les paramètres autorisés.

Contrairement au super-administrateur, l’administrateur ne possède pas le droit général de suppression.

### 3.3 Gestionnaire des bourses
mail:gestionnaire@esu.cd
password:besu@cd2026-2027
Le `GESTIONNAIRE_BOURSES` conduit le workflow métier :

- enregistrer les programmes de bourses ;
- créer et publier les appels ;
- définir les documents obligatoires de chaque appel ;
- définir les critères d’évaluation, notes maximales et pondérations ;
- consulter les candidatures soumises ;
- contrôler les documents et demander un remplacement si nécessaire ;
- déclarer un dossier éligible ou non éligible ;
- affecter le dossier à un évaluateur ;
- faire passer le dossier vers l’évaluation ;
- formaliser une acceptation ou un rejet lorsque toutes les évaluations sont terminées ;
- suivre les attributions, renouvellements, suspensions et clôtures.

Le gestionnaire ne saisit pas le mot de passe des étudiants inscrits publiquement et ne comptabilise pas les décaissements à la place du comptable.

### 3.4 Évaluateur
mail:evaluateur@esu.cd
password:besu@cd2026-2027
L’`EVALUATEUR` traite uniquement les dossiers qui lui sont affectés :

1. ouvrir **Évaluations** ;
2. sélectionner une affectation ;
3. lire les informations et documents auxquels il est autorisé à accéder ;
4. attribuer une note à chaque critère ;
5. ajouter un commentaire ;
6. donner un avis `FAVORABLE`, `DEFAVORABLE` ou `A_REVOIR` ;
7. terminer l’évaluation.

Le score final est calculé automatiquement à partir des critères pondérés. L’évaluateur donne un avis technique, mais il ne crée pas lui-même la décision administrative finale ni la bourse.

### 3.5 Comptable
mail:comptable@esu.cd
password:besu@cd2026-2027
Le `COMPTABLE` suit l’argent versé au bénéficiaire. Il :

- consulte les attributions accordées ;
- consulte l’échéancier prévu ;
- enregistre la date et le mode d’un versement ;
- fait passer le paiement à `EFFECTUE`, `ECHEC` ou `ANNULE` selon la situation ;
- téléverse une preuve de paiement privée ;
- consulte les montants payés, prévus ou en retard ;
- utilise les rapports financiers.

Le comptable n’évalue pas la candidature et n’a pas accès aux pièces académiques privées du dossier.

### 3.6 Étudiant
mail:melchack@esu.cd
password:besu@cd2026-2027
L’`ETUDIANT` gère uniquement ses propres informations :

- créer son compte depuis `/inscription` dans la page de connexion, après avoir cliqué sur créer un compte ;
- choisir son établissement actuel ;
- se connecter et, si cela est demandé, remplacer le mot de passe initial ;
- consulter les appels publiés et ouverts ;
- créer une candidature avec sa motivation ;
- téléverser les documents demandés ;
- soumettre ou annuler son dossier ;
- remplacer un document rejeté lorsque le workflow le permet ;
- suivre le statut, la décision, l’attribution et les versements de sa bourse ;
- consulter ses notifications.

L’étudiant ne saisit jamais la référence de candidature, le score final, la décision, le montant accordé ou un paiement.

## 4. Qui paie qui ?

La rubrique **Paiements** ne représente pas des frais payés par l’étudiant au comptable.

Le sens financier est le suivant :

```text
Ministère ou organisme financeur
              ↓
     versement de la bourse
              ↓
       étudiant bénéficiaire
```

Le comptable est l’agent qui enregistre et justifie cette opération dans le système. Il ne reçoit pas personnellement l’argent de l’étudiant.

Exemple : une bourse de 2 400 USD est accordée à Gabriel et divisée en quatre tranches de 600 USD. Le système crée les échéances. Quand la première tranche est réellement versée au bénéficiaire par le canal financier choisi, le comptable renseigne la date, le mode de paiement, le statut `EFFECTUE` et la preuve.

Les contrôles empêchent :

- de payer dans une devise différente de l’attribution ;
- de dépasser le montant total accordé ;
- de déclarer un paiement inexistant sans conserver les informations de suivi prévues.

## 5. Statuts d’une candidature

| Statut | Signification | Qui l’utilise principalement ? | Étape suivante normale |
| --- | --- | --- | --- |
| `BROUILLON` | Dossier créé mais pas encore envoyé. | Étudiant | Ajouter les pièces, puis passer à `SOUMISE`. |
| `SOUMISE` | L’étudiant a officiellement envoyé le dossier. | Étudiant | Le gestionnaire passe à `EN_VERIFICATION`. |
| `EN_VERIFICATION` | L’administration contrôle les informations et documents. | Gestionnaire ou administration | `ELIGIBLE` ou `NON_ELIGIBLE`. |
| `ELIGIBLE` | Le dossier satisfait les conditions administratives. | Gestionnaire ou administration | Affecter l’évaluation, puis `EN_EVALUATION`. |
| `NON_ELIGIBLE` | Une condition administrative n’est pas remplie. | Gestionnaire ou administration | Retour éventuel à `EN_VERIFICATION` après régularisation, ou annulation. |
| `EN_EVALUATION` | Un ou plusieurs évaluateurs analysent le dossier. | Gestionnaire et évaluateur | Décision finale : `RETENUE` ou `REJETEE`. |
| `RETENUE` | La candidature est acceptée. | Gestionnaire, administrateur ou super-administrateur | Création de l’attribution et de l’échéancier. |
| `REJETEE` | La candidature est refusée avec justification. | Gestionnaire, administrateur ou super-administrateur | Consultation de la décision ; réouverture exceptionnelle possible selon le workflow. |
| `ANNULEE` | Le dossier est abandonné ou annulé. | Étudiant avant traitement, ou administration selon le cas | Aucun traitement normal supplémentaire. |

Le passage à `SOUMISE` est refusé si une pièce obligatoire manque. Les transitions incohérentes sont également refusées par le serveur.

## 6. Statuts des documents

| Statut | Signification | Action attendue |
| --- | --- | --- |
| `A_VERIFIER` | Le fichier a été déposé et attend le contrôle. | Le gestionnaire l’ouvre et le vérifie. |
| `VALIDE` | Le document est accepté. | Aucune correction demandée. |
| `REJETE` | Le document ne peut pas être accepté. | L’étudiant consulte le motif et dépose une pièce conforme. |
| `REMPLACEMENT_DEMANDE` | La pièce doit être remplacée ou corrigée. | L’étudiant téléverse une nouvelle version. |

Les documents sont privés dans Vercel Blob. Un étudiant voit seulement ses propres pièces. Le comptable ne peut pas consulter les documents académiques des candidatures.

## 7. Statuts des évaluations

| Statut | Signification |
| --- | --- |
| `ASSIGNEE` | Le gestionnaire a désigné l’évaluateur. |
| `EN_COURS` | L’évaluateur a commencé le traitement. |
| `TERMINEE` | Toutes les notes et l’avis ont été enregistrés. |

La décision finale ne peut être prise que lorsque toutes les évaluations du dossier sont terminées.

## 8. Décision, attribution et suivi de la bourse

Une décision formelle est soit `ACCEPTEE`, soit `REJETEE`.

- Une décision acceptée fait passer la candidature à `RETENUE` et permet de créer l’attribution avec un montant, une devise et une période.
- Une décision rejetée fait passer la candidature à `REJETEE` et conserve la justification.
- L’avis de décision peut être imprimé.

Une attribution peut ensuite être :

- `ACTIVE` : la bourse est en cours ;
- `SUSPENDUE` : les versements ou droits sont temporairement arrêtés ;
- `TERMINEE` : la période de bourse est clôturée normalement ;
- `ANNULEE` : la bourse est supprimée administrativement.

Le module **Renouvellements** enregistre les décisions annuelles `RENOUVELEE`, `SUSPENDUE`, `REACTIVEE`, `CLOTUREE` ou `ANNULEE`. Il met à jour l’état de l’attribution et notifie l’étudiant.

## 9. Statuts des paiements

| Statut | Signification | Responsable principal |
| --- | --- | --- |
| `PREVU` | Une tranche doit être versée à la date indiquée. | Comptable |
| `EFFECTUE` | Le versement au bénéficiaire a été réalisé. | Comptable |
| `ECHEC` | Le versement a échoué et doit être examiné. | Comptable |
| `ANNULE` | L’échéance ou l’opération a été annulée. | Comptable ou administration autorisée |

## 10. Parcours complet à présenter devant le jury

Pour expliquer clairement le projet, utiliser ce scénario :

1. Le super-administrateur montre les rôles et les établissements.
2. Le gestionnaire crée un programme et un appel, puis configure pièces et critères.
3. L’étudiant crée son compte, sélectionne son établissement et se connecte.
4. L’étudiant crée un brouillon, écrit sa motivation et téléverse les pièces.
5. L’étudiant soumet la candidature.
6. Le gestionnaire vérifie le dossier et les documents.
7. Le gestionnaire déclare le dossier éligible et affecte un évaluateur.
8. L’évaluateur note chaque critère ; le système calcule le score.
9. Le gestionnaire ou l’administrateur formalise l’acceptation ou le rejet.
10. En cas d’acceptation, le système crée l’attribution et les échéances.
11. Le comptable enregistre chaque versement effectué au bénéficiaire et sa preuve.
12. Le responsable renouvelle, suspend, réactive ou clôture la bourse.
13. Le super-administrateur montre le tableau de bord, les rapports et le journal d’audit.

## 11. Comptes et mots de passe

Un étudiant inscrit publiquement obtient automatiquement un compte lié à son profil étudiant. L’administration ne doit pas recréer ce compte.

Lorsqu’un compte est créé ou que son mot de passe est réinitialisé par l’administration, le système peut imposer un changement à la première connexion. Tant que ce changement n’est pas réalisé, l’utilisateur est dirigé vers **Mon compte** et ne peut pas utiliser les autres rubriques.

Après cinq mots de passe incorrects, le compte peut être temporairement verrouillé pendant quinze minutes.

## 12. Tableau de bord, rapports et audit

Le tableau de bord affiche les statistiques, dossiers récents, échéances, alertes et paiements provenant de la base.

Les rapports peuvent être filtrés par période, établissement, programme, étudiant, statut et décision. Ils peuvent être exportés en CSV ou imprimés et enregistrés en PDF avec la fonction d’impression du navigateur.

Les notifications signalent les événements importants aux utilisateurs. Le journal d’audit, réservé au super-administrateur, conserve les actions sensibles pour faciliter la traçabilité.

## 13. Identité visuelle

Le super-administrateur peut remplacer ou restaurer le logo depuis **Paramètres**. Le logo, les documents de candidature et les preuves de paiement sont stockés dans Vercel Blob. La variable `BLOB_READ_WRITE_TOKEN` doit être configurée dans l’environnement de déploiement.
