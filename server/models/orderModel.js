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
    // userId (la clé étrangère du modèle User) : Dans ce cas, userId est une clé étrangère qui fait référence à
    // la table users (par défaut, Sequelize utilise le nom du modèle au pluriel et en minuscules pour le nom de
    // la table), et la clé id de cette table.
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // Le nom de la table 'user' en minuscules et au pluriel
            model: 'users',
            key: 'id'
        }
    },
});

module.exports = Order;