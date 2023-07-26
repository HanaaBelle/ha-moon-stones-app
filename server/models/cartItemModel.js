// cartItemModel.js : pour stocker les informations sur les articles spécifiques contenus dans un panier d'achat.
// On doit ajouter des champs appropriés à nos modèles pour stocker les clés étrangères.
// Notre modèle "CartItem" devrait inclure un "cartId" et un "jewelryId".

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
    // cartId (la clé étrangère du modèle Cart) : Dans ce cas, cartId est une clé étrangère qui fait référence à
    // la table carts (par défaut, Sequelize utilise le nom du modèle au pluriel et en minuscules pour le nom de
    // la table), et la clé id de cette table.
    cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // Le nom de la table 'cart' en minuscules et au pluriel
            model: 'carts',
            key: 'id'
        }
    },
    // pareil pour productId (la clé étrangère du modèle jewelry)
    jewelryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // Le nom de la table 'jewelry' en minuscules et au pluriel
            model: 'jewelries',
            key: 'id'
        }
    }
});

module.exports = CartItem;