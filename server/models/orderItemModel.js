// orderItemModel.js

const Sequelize = require('sequelize');
const sequelize = require('../shared/database');

const OrderItem = sequelize.define('orderItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // Quantité du produit commandé
    quantity: Sequelize.INTEGER,

    // Identifiant de la commande à laquelle cet élément est associé
    // orderId (la clé étrangère du modèle Order) : Dans ce cas, orderId est une clé étrangère qui fait référence à
    // la table orders (par défaut, Sequelize utilise le nom du modèle au pluriel et en minuscules pour le nom de
    // la table), et la clé id de cette table.
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // Le nom de la table 'order' en minuscules et au pluriel
            model: 'orders',
            key: 'id'
        }
    },
    // Identifiant du produit commandé : productId (la clé étrangère du modèle Product)
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // Le nom de la table 'product' en minuscules et au pluriel
            model: 'products',
            key: 'id'
        }
    }
});

module.exports = OrderItem;