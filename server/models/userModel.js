// UserModel.js : pour stocker les informations sur les utilisateurs.

// Ce script définit un modèle Sequelize, qui est une représentation d'une table de la BDD en JavaScript.
// Chaque modèle est une classe dont les instances représentent des entrées de la BDD.
// Voici ce que chaque partie fait :

// Importation des dépendances :

// Importation du module Sequelize.
// La ligne const sequelize = require('../../shared/database'); ne nécessite aucun remplacement.
// Ici, '../../shared/database' est le chemin vers le fichier JavaScript qui exporte l'instance de Sequelize qu'on a
// configurée pour l'application. Ce chemin doit pointer vers le fichier où on avait écrit le code pour configurer
// Sequelize avec les informations de BDD, comme indiqué dans notre cas dans le fichier "database.js"
// (ma_BDD, admin, mot_de_passe).

const Sequelize = require('sequelize');

// Importation de l'instance Sequelize qu'on a configuré dans un autre fichier "database.js", qui est connectée à la BDD.
const sequelize = require('../shared/database');

// La méthode sequelize.define est utilisée pour définir un modèle.
// Le premier argument est le nom du modèle ('user'), qui sera également utilisé comme nom de la table dans la BDD.
const User = sequelize.define('user', {
    // Le deuxième argument est un objet qui définit les attributs du modèle, qui seront utilisés comme colonnes de
    // la table. Pour nous le modèle User a quatre attributs :
    // id : C'est l'identifiant unique de chaque utilisateur. Il est de type Sequelize.INTEGER, s'auto-incrémente,
    // ne peut pas être nul (allowNull : false) et est la clé primaire de la table (primaryKey : true).
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // name : C'est le nom de l'utilisateur. Il est de type Sequelize.STRING, ce qui signifie qu'il s'agit d'une chaîne
    // de caractères.
    name: Sequelize.STRING,
    // email : C'est l'adresse e-mail de l'utilisateur. Comme name, elle est également de type Sequelize.STRING.
    email: Sequelize.STRING,
    // password: C'est le mot de passe de l'utilisateur, également stocké comme une chaîne de caractères.
    password: Sequelize.STRING
});

// Exportation du modèle "User" pour pouvoir être utilisé dans d'autres parties de l'application, par exemple
// pour créer de nouveaux utilisateurs, pour rechercher des utilisateurs existants, etc...
module.exports = User;