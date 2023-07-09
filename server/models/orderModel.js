// orderModel.js

const Sequelize = require('sequelize');
const sequelize = require('../shared/database');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // Identifiant de l'utilisateur qui a passé la commande
    userId: Sequelize.INTEGER
});

module.exports = Order;