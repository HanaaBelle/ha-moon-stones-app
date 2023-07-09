// productModel.js : pour stocker les informations sur les bijoux que je vends.
// C'est pareil que dans le fichier "userModel.js"

const Sequelize = require('sequelize');
const sequelize = require('../shared/database');

// Chaque produit a un id unique, un name, une description, un price et une imageUrl pour l'image du produit.
const Product = sequelize.define('product', {
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

module.exports = Product;