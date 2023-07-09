// cartItemModel.js : pour stocker les informations sur les articles spécifiques contenus dans un panier d'achat.
// On doit ajouter des champs appropriés à nos modèles pour stocker les clés étrangères.
// Notre modèle "CartItem" devrait inclure un "cartId" et un "productId".

const Sequelize = require('sequelize');
const sequelize = require('../shared/database');

// Chaque CartItem a un id unique et une quantity pour le nombre d'articles de ce type dans le panier.
const CartItem = sequelize.define('cartItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER,

    cartId: Sequelize.INTEGER,
    productId: Sequelize.INTEGER
});

module.exports = CartItem;