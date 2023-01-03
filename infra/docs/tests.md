# Librairies utilisées

Les librairies utilisées sont :
**Jest** pour l'environnement de test
**React-testing-library (RTL)** pour les tests unitaires

# Lancer les séquences de test

Pour lancer la séquence de tests complète il faut utiliser la commande
```shell
npm test
```

# Scripts de test

Plusieurs scripts de tests ont étés configurés dans le package.json, qui sont lançables avec `npm run <script>`

- Séquence de test normale, avec verbosité : `npm run test` dont l'alias est `npm test`
- Séquence de test sans verbosité : `npm run test-silent`
- Séquence de test avec couverture du code : `npm run test-coverage`
- Séquence de test avec sortie de la console : `npm run test-console`

Pour chacune de ces séquences, il est possible de passer une chaine de caractère après le script testant soit un type de tests, soit les tests d'un composant en particulier.
La commande est :

```shell
npm run <script> <nom_sequence>  # Fonctionne aussi avec npm test <nom_sequence>
```

Et il possible de lancer une
- Séquence de test sur un composant, par exemple avec Devis : `npm test "Devis"`
- Séquence de test sur un type de test, par exemple Unit : `npm test "Unit"`



# Syntaxe des arguments

Il est possible de passer des arguments à Jest avec cette syntaxe :
```shell
npm run jest -- <arguments>
```

Les différents drapeaux sont trouvables dans la doc de Jest https://jestjs.io/docs/cli
Par exemple :
```shell
npm run jest -- --showconfig
```
