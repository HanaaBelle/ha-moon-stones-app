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
const CartItem = require('./models/cartItemModel');
const Order = require('./models/orderModel.js');
const OrderItem = require('./models/orderItemModel.js');

// Initialisation de l'application Express :
// Cela crée une nouvelle application Express, qu'on va utiliser pour configurer le serveur.
const app = express();

// Utilisation de middleware (bodyParser)
// "app.use" est une méthode pour configurer le middleware pour l'application. On utilise body-parser.json(), qui va :
// Analyse les corps des requêtes entrantes en JSON.
app.use(bodyParser.json());

// Définition des associations de modèles :
// Avec ces relations définies, Sequelize saura comment joindre les tables appropriées lors de la réalisation de requêtes
// sur ces modèles.

// Afin que le modèle "Cart" soit associé à "User", on appelle sequelize.sync()) en utilisant les méthodes "hasMany"
// et "belongsTo" de Sequelize ils définissent les relations entre les modèles.
// Cette configuration indique qu'un "User" peut avoir plusieurs "Cart" (un utilisateur peut avoir plusieurs paniers),
// et chaque "Cart" appartient à un "User" (chaque panier appartient à un utilisateur).

// User.hasMany(Cart, { foreignKey: 'userId' }) signifie qu'un utilisateur peut avoir plusieurs paniers,
User.hasMany(Cart, { foreignKey: 'userId' });

// et Cart.belongsTo(User, { foreignKey: 'userId' }) signifie qu'un panier appartient à un utilisateur.
Cart.belongsTo(User, { foreignKey: 'userId' });

// On a aussi cette association entre le modèle "Cart" et CartItem où :
// Un "Cart" peut avoir plusieurs "CartItem", et chaque "CartItem" appartient à un "Cart" et aussi à un "Product".

// Si on veut obtenir tous les CartItem pour un "Cart" particulier, Sequelize saura qu'il doit :
// rechercher les "CartItem" qui ont un "cartId" correspondant à l'id du "Cart".

// Un Cart peut avoir plusieurs CartItem
Cart.hasMany(CartItem, { foreignKey: 'cartId' });

// Chaque CartItem appartient à un Cart
CartItem.belongsTo(Cart, { foreignKey: 'cartId' });

// Chaque CartItem appartient à un Product
CartItem.belongsTo(Product, { foreignKey: 'productId' });

// Un utilisateur peut avoir plusieurs commandes
User.hasMany(Order, { foreignKey: 'userId' });

// Chaque commande appartient à un utilisateur
Order.belongsTo(User, { foreignKey: 'userId' });

// Une commande peut avoir plusieurs éléments
Order.hasMany(OrderItem, { foreignKey: 'orderId' });

// Chaque OrderItem de commande appartient à une commande
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

// Chaque OrderItem de commande appartient à un produit
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

// Ajout de plus d'associations si nécessaire...

// Définition et configuration des routes
app.use('/users', require('./routes/userRoute'));
app.use('/carts', require('./routes/cartRoute'));
app.use('/products', require('./routes/productRoute'));

// Remarque : les champs userId, orderId et productId sont utilisés comme clés étrangères pour établir les relations
// entre les tables. Il ne faut toujours s'assurer de synchroniser nos modèles avec la BDD après avoir défini ces
// relations, en utilisant sequelize.sync()

// Synchronisation des modèles avec la BDD et démarrage du serveur
sequelize.sync()
    .then(result => {
        app.listen(3000, () => console.log('server is running on port 3000'));
    })
    .catch(err => console.error(err));
