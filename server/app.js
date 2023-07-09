// Le fichier d'initialisation principal, souvent appelé app.js ou index.js dans une application Node.js utilisant :
// Express et Sequelize, est le point d'entrée de l'application. Il contient généralement les configurations globales,
// les liaisons des modèles, la création du serveur et les routes principales.

// Importation des dépendances les modules dont le script a besoin.

// express est le framework pour le serveur
const express = require('express');

// body-parser est un middleware qui traite les requêtes entrantes en les analysant en un format JSON
const bodyParser = require('body-parser');

// Importation de l'instance Sequelize est la connexion à la BDD.
const sequelize = require('./shared/database');

// Importation des modèles de la BDD définis dans d'autres fichiers. Ils représentent les tables de la BDD.
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Cart = require('./models/cartModel');



// Définition et configuration des routes
app.use('/users', require('./routes/users'));
app.use('/carts', require('./routes/carts'));
app.use('/products', require('./routes/products'));

// Synchronisation des modèles avec la base de données et démarrage du serveur :
// On s'assure de synchroniser nos modèles avec la base de données après avoir défini ces relations, en utilisant
// sequelize.sync()
sequelize.sync()
    .then(result => {
        app.listen(3000, () => console.log('server is running on port 3000'));
    })
    .catch(err => console.error(err));
