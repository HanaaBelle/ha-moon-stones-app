// cartModel.js : pour stocker les informations sur les paniers d'achat des utilisateurs.

// La création de modèles supplémentaires, tels que le modèle Cart ou d'autres, suit la même structure que le modèle
// User et product précédemment définis. On définira simplement les champs nécessaire pour ces tables dans la BDD.

const Sequelize = require('sequelize');
const sequelize = require('../shared/database');

// La table Cart contient les champs suivants :
const Cart = sequelize.define('cart', {
    // id (clé primaire)
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
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
    // et date (la date où le panier a été créé)
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

//

module.exports = Cart;
