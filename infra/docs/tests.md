# Librairies utilisées

Les librairies utilisées sont :
**Jest** pour l'environnement de test
**React-testing-library (RTL)** pour les tests unitaires

# Lancer les séquences de test

Pour lancer la séquence de tests complète il faut utiliser la commande
```shell
npm test
```

Mais il est aussi possible de passer des arguments à Jest
```shell
npm test -- (arguments)
```

Ainsi on peut

1) Lancer uniquement un test en particulier. Si on veut lancer uniquement les tests qui contiennent app dans leur nom :
```shell
npm test -- -t 'App'
```

2) Observer la couverture du code :
```shell
npm test -- --collect-coverage
```
