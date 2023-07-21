// Importation de Sequelize qui est un Object-Relational Mapping (ORM) pour Node.js.
// Sequelize permet d'interagir avec des bases de données SQL comme MySQL, PostgreSQL, SQLite et MSSQL en utilisant
// du code JavaScript plutôt que d'écrire directement des requêtes SQL.
const Sequelize = require('sequelize');

// Configuration de la connexion à la base de données. Cela crée une nouvelle instance de Sequelize pour la connexion
// à une BDD spécifique. Les paramètres passés à Sequelize sont les suivants :
// 'ma_BDD' est le nom de la BDD à laquelle on se connecte.
// 'admin' est le nom d'utilisateur utilisé pour s'authentifier auprès de la BDD.
// 'mot_de_passe' est le mot de passe utilisé pour s'authentifier auprès de la BDD.
// host: 'localhost' spécifie l'emplacement de la BDD. La BDD est sur la même machine que le script (localhost).
// dialect: 'mysql' indique le type de BDD à laquelle on se connecte. Dans ce cas, c'est MySQL.
// On remplace 'database', 'username' et 'password' par les informations de la BDD MySQL.
const sequelize = new Sequelize('ma_BDD', 'admin', 'mot_de_passe', {
    host: 'localhost',
    dialect: 'mysql'
});

// Cela exporte l'instance Sequelize pour pouvoir l'utiliser dans d'autres fichiers de mon application.
// On peut par exemple, l'importer dans nos fichiers de modèles pour définir comment les tables de notre BDD doivent
// être structurées.
module.exports = sequelize;
