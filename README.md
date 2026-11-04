# 🏆 EPIck'em

> **Projet PGE5 - Epitech**
> Plateforme web et mobile de suivi et de gestion de tournois e-sportifs (intégration Start.gg).

## Description

EPIck'em est une solution complète divisée en trois axes majeurs :

- **Plateforme Web** : Interface d'administration et de consultation (Next.js).

- **Application Mobile** : Application compagnon pour les joueurs et spectateurs (React Native / Expo).

- **Backend / API** : Logique métier et communication avec les services tiers (Node.js).

Le projet s'interface notamment avec l'API de [Start.gg](https://start.gg/) pour récupérer les données de tournois en temps réel.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/) (Version 18.x ou supérieure recommandée)

- [Git](https://git-scm.com/)

- Un token d'API personnel Start.gg

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-organisation/epickem.git
   cd epickem
   ```

2. **Installer les dépendances :**
   _(L'installation de Husky se fera automatiquement après cette étape)_

   ```bash
   npm install
   ```

3. **Configurer l'environnement :**
   Copiez le fichier d'exemple pour créer votre fichier `.env` local. **Ne pushez jamais ce fichier.**

   ```bash
   cp .env.example .env
   ```

   _Ouvrez ensuite le fichier `.env` et ajoutez-y votre token Start.gg ainsi que vos identifiants de base de données._

4. **Lancer le projet en développement :**

   ```bash
   npm run dev
   ```

## Contribution et Qualité du Code

Nous utilisons un workflow strict basé sur GitFlow avec des outils automatisés pour garantir la qualité du projet :

- **Formatage et Linting automatiques :** Un hook `pre-commit` (via Husky et lint-staged) exécute automatiquement un linter (ESLint) et un formateur (Prettier) sur vos fichiers modifiés avant chaque commit.
- **Conventions de nommage :** Les messages de commit sont vérifiés par Commitlint (`[+]`, `[*]`, etc.).

Avant de commencer à coder, merci de lire attentivement notre [Guide de Contribution](./CONTRIBUTING.md) et notre processus de Pull Request.

Veuillez également consulter notre [Code de Conduite](./CODE_OF_CONDUCT.md).

## Équipe (Epitech)

- **Mathis Deruywe** - Développeur

- **Mattéo Salini** - Développeur

- **Neil Ayeb** - Développeur

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](./LICENSE) pour plus de détails.
