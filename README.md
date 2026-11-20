# Mon projet DevOps 2026

[![CI](https://github.com/Stitiv-12/Devops-project-2026/actions/workflows/ci.yml/badge.svg?branch=dev)](https://github.com/Stitiv-12/Devops-project-2026/actions/workflows/ci.yml)

## 1. Présentation du projet

**Devops-project-2026** est un projet réalisé dans le cadre de mon cours de DevOps. Il consiste à mettre en place une application web avec **React** et **TypeScript**, ainsi que différents outils utilisés dans un projet logiciel :

- des tests automatisés avec [Vitest](https://vitest.dev/) ;
- un linter avec [ESLint](https://eslint.org/) ;
- un formateur de code avec [Prettier](https://prettier.io/) ;
- une conteneurisation avec [Docker](https://www.docker.com/) ;
- une intégration continue avec [GitHub Actions](https://docs.github.com/actions).

L'application présente une liste de tâches modifiable. Il est possible de :

- cocher une tâche comme réalisée ;
- supprimer une tâche ;
- supprimer toutes les tâches ;
- ajouter une nouvelle tâche ;
- consulter le nombre de tâches restantes.

## 2. Technologies utilisées

- [React](https://react.dev/) et [TypeScript](https://www.typescriptlang.org/) ;
- [Vite](https://vite.dev/) ;
- [Vitest](https://vitest.dev/) et [Testing Library](https://testing-library.com/) ;
- [ESLint](https://eslint.org/) et [Prettier](https://prettier.io/) ;
- [Docker](https://www.docker.com/) ;
- [GitHub Actions](https://github.com/features/actions).

## 3. Installation et utilisation

### Installation locale

```bash
git clone https://github.com/Stitiv-12/Devops-project-2026.git
cd Devops-project-2026
npm install
```

Pour lancer l'application en mode développement :

```bash
npm run dev
```

### Tests, lint et formatage

**Lancer les tests :**

```bash
npm run test -- --run
```

**Vérifier le code avec ESLint :**

```bash
npm run lint
```

**Formater le code avec Prettier :**

```bash
npm run format
```

### Lancement avec Docker

Construire l'image :

```bash
docker build -t devops-project-2026 .
```

Lancer le conteneur :

```bash
docker run --rm -p 8080:80 devops-project-2026
```

L'application est alors accessible à l'adresse [`http://localhost:8080`](http://localhost:8080).

## 4. Intégration continue

Le workflow [GitHub Actions](.github/workflows/ci.yml) se lance automatiquement lors :

- d'un **push** ;
- de la création ou de la mise à jour d'une **pull request**.

La CI installe les dépendances, lance ESLint et exécute les tests Vitest. Le badge en haut de cette page indique si le dernier pipeline est réussi ou non.

## 5. Dépôt et auteur

- **Dépôt GitHub :** [Stitiv-12/Devops-project-2026](https://github.com/Stitiv-12/Devops-project-2026)
- **Réalisé par :** Steven Vaidie

## 6. Captures d'écran

Les captures d'écran suivantes peuvent être ajoutées dans un dossier `docs/` :

- le pipeline vert dans l'onglet **Actions** ;
- l'application affichant la liste des tâches ;
- l'application dans un conteneur Docker.

Exemple d'insertion d'une capture :

```markdown
![Pipeline GitHub Actions réussi](docs/images/ci-success.png)
```

## 7. Difficultés rencontrées et améliorations

### Difficultés rencontrées

- La prise en main de React a été un peu difficile, car je n'en avais pas utilisé depuis un certain temps. Je suis maintenant plus à l'aise avec ce framework.
- J'ai rencontré une difficulté avec Vercel, qui ciblait la branche `main` pour la mise en production alors que ma branche principale est `dev`.

### Améliorations possibles

- ajouter une vérification du formatage Prettier dans la CI avec `prettier --check .` ;
- ajouter des tests pour l'ajout, la suppression et la validation des tâches ;
- publier automatiquement l'application après la réussite de la CI.
