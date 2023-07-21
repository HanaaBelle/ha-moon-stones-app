// Utilisation du modèle user pour interagir avec la BDD. Ici, on crée un nouvel utilisateur

// On importe le modèle User qu'on a défini précédemment. C'est essentiellement un objet qui représente la table "users"
// dans la BDD, et qui contient des méthodes que nous pouvons utiliser pour interagir avec cette table.
const User = require('../models/userModel');

// User.create() est une méthode de Sequelize qu'on peut utiliser pour créer un nouvel enregistrement dans la table
// users. On passe à cette méthode un objet qui contient les données que nous voulons stocker dans cet enregistrement.
// Ici, on crée un nouvel utilisateur avec le nom 'Admin', l'adresse email 'admin@gmail.com' et
// le mot de passe '1234567'.
User.create({
    name: 'Admin',
    email: 'email@example.com',
    password: '1234567'
    // User.create() renvoie une "Promesse", c'est pourquoi nous pouvons utiliser les méthodes then et catch sur elle.
})
    // La méthode then est exécutée lorsque la Promesse est résolue, c'est-à-dire lorsque l'enregistrement a été créé
    // avec succès. L'objet "user" que nous recevons en argument est une représentation de l'enregistrement nouvellement
    // créé.
     .then(user => console.log(user))
    // La méthode catch est exécutée si une erreur se produit lors de la création de l'enregistrement.
    // L'objet "err" que nous recevons en argument contient des informations sur l'erreur qui s'est produite.
    // Ici l'erreur est simplement affichée à l'écran. Dans une application réelle.
    .catch(err => console.error(err));

// Il faut gérer cette erreur d'une manière plus sophistiquée (à revoir !!!)
