# Guide de Contribution - EPIck'em (ONM)

Bienvenue dans le guide de contribution du projet EPIck'em. Ce document définit les standards de développement, les conventions de nommage et le flux de travail (workflow) imposés pour garantir un code de qualité et un historique propre pour notre validation PGE5 Epitech.

## 1. Flux de travail (GitFlow)

Notre dépôt utilise une approche basée sur deux branches principales :
- `main` : Contient uniquement le code de production stable, relu et validé. **Aucun push direct n'est autorisé.**
- `dev` : Branche d'intégration principale. C'est ici que les fonctionnalités terminées sont fusionnées avant d'atteindre `main`.

### Comment démarrer une tâche ?
1. **Assignez-vous une Issue** sur le GitHub Project et placez-la dans la colonne *In Progress*.
2. **Placez-vous sur dev et mettez à jour :**
   ```bash
   git checkout dev
   git pull origin dev
   ```
3. **Créez votre branche de travail :**
   ```bash
   git checkout -b type/nom-de-la-tache
   ```

## 2. Conventions de nommage des branches

Le nom de la branche doit être en anglais, en minuscules (kebab-case) et préfixé par sa nature :
- `feature/nom-de-la-feature` (ex: `feature/user-login`)
- `bugfix/nom-du-bug` (ex: `bugfix/crash-on-register`)
- `hotfix/nom-urgence` (ex: `hotfix/database-connection`)
- `docs/nom-du-document` (ex: `docs/update-readme`)

## 3. Conventions des Commits

Notre projet utilise **Husky** et **Commitlint** pour imposer un format strict. Un commit mal formaté sera bloqué.

**Syntaxe obligatoire :** `[symbole] message en anglais, clair et concis`

| Préfixe | Signification | Exemple d'utilisation |
| :---: | :--- | :--- |
| `[+]` | **Ajout** (nouvelle feature, nouveau fichier) | `git commit -m "[+] add JWT authentication strategy"` |
| `[-]` | **Suppression** (code mort, fichier inutile) | `git commit -m "[-] remove unused legacy logo"` |
| `[~]` | **Modification** (refactoring, style, update) | `git commit -m "[~] update tailwind configuration"` |

## 4. Gestion des Issues et Labels

Toute modification du code doit correspondre à une Issue existante. Lors de la création d'une Issue, utilisez les templates fournis et ajoutez **toujours** :
1. **Un Responsable (Assignee)**
2. **Un Sprint (Iteration)**
3. **Deux Labels minimum :**
   - Le **Scope** : `scope: web`, `scope: mobile`, `scope: backend` ou `scope: infra`.
   - Le **Type** : `type: feat`, `type: bug`, `type: refacto`, `type: maintenance` ou `type: docs`.

## 5. Processus de Pull Request (PR)

Une fois votre développement terminé sur votre branche locale :
1. Poussez votre branche : `git push origin votre-branche`
2. Ouvrez une Pull Request vers la branche **`dev`** (et non `main`).
3. Remplissez le template de PR généré automatiquement.
4. **Obligatoire :** Liez la PR à son Issue en écrivant `Closes #X` (X étant le numéro de l'issue) dans la description.
5. Attendez la relecture (Review) et l'approbation d'au moins **un autre membre de l'équipe** (Mathis, Mattéo ou Neil).
6. Une fois validée, fusionnez (Merge) la PR. L'Issue passera automatiquement dans la colonne *Done* du projet.

## 6. Environnement Local et Sécurité

- Ne commitez **jamais** de données sensibles (clés d'API, mots de passe, tokens start.gg).
- Si une nouvelle variable d'environnement est nécessaire, ajoutez-la dans le fichier `.env.example` avec une valeur factice pour documenter sa présence, et prévenez l'équipe.
- Assurez-vous d'avoir exécuté `npm install` pour activer Husky sur votre machine avant votre premier commit.