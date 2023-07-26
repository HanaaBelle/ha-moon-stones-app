// jewelryModel.js : pour stocker les informations sur les bijoux que nous vendons.
// C'est pareil que dans le fichier "userModel.js"

const Sequelize = require('sequelize');
const sequelize = require('../shared/database');

// Chaque bijou a un id unique, un name, une description, un price et une imageUrl pour l'image du produit.
const Jewelry = sequelize.define('jewelry', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    price: Sequelize.DOUBLE,
    imageUrl: Sequelize.STRING,
});

module.exports = Jewelry;