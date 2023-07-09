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
    orderId: Sequelize.INTEGER,
    // Identifiant du produit commandé
    productId: Sequelize.INTEGER
});

module.exports = OrderItem;