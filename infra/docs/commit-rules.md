# Convention Git 

Les préfixes sont issus de @commitlint/config-conventional :
| Préfixe |  | Utilisation |
|---:|:---:|:---|
| build | 📦 | Changement lié à la construction des livrables |
| ci | 👷 | Changement lié à l'intégration continue |
| chore | 🔬 | Changement non visible qui n'entre pas dans une autre catégorie : .gitignore,
visibilité méthode, modification d'une feature qui n'est pas un fix, etc. |
| docs | 📝 | Changement de la documentation |
| feat | ✨ | Nouvelle fonctionnalité |
| fix | 🐛 | Résolution de bug |
| perf | ⚡ | Amélioration de la performance |
| refactor | ♻ | Refactoring |
| revert | ⏪ | Retour en arrière |
| style | 💄 | Changement cosmétique |
| test | ✅ | Ajout/correction d'un test |

Les scopes sont facultatifs et utilisés s'ils apportent quelque chose au message de commit :

- db
- backend
- frontend
- rapports
- pdi



A avoir en tête :
La première ligne décrit rapidement le changement (<50 caractères)
  * N'utiliser que des minuscules hormis pour les noms propres, les acronymes et les référence au code

Pour la suite si nécessaire :
  * La seconde ligne est vide
  * Les lignes suivantes décrivent les changements de manière plus précise (lignes <72 caractères)
  * Lorsqu'un changement de rupture est identitié, un ! précède directement le séparateur et chaque point de rupture est décrit par une ligne qui commence par BREAKING CHANGE:

Exemple : 

```git 
feat(frontend) : Ajout de la fonctionnalite de tri 

-Ajout de la fonction de tri par ordre alphabétique
-Ajout de la fonction de tri en fonction du prix

```