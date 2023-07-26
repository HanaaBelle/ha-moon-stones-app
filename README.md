## Projet : Ha_Moon_Stones_App 

Site de vente de bijoux en pierre avec (react vite, tailwind pour le frontend et code.js, express en backend 
et coté base de données sqlite et sequelize.
Avec gestion de :

* Panier
* Login
* Sign up
* Page admin
* Session utilisateur

Avant tout, je m'assure d'avoir Node.js et npm (Node Package Manager) installés sur mon ordinateur.

### 1. Configuration de l'environnement de développement

Je commence par créer un nouveau projet Vite en utilisant npx :

`npx create-vite mon-site --template react-ts
cd mon-site
`

#### 1.1 Ensuite, j'installe Tailwind CSS

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
`

#### 1.2 J'intègre Tailwind à mon projet en ajoutant ces lignes à mon fichier index.css

`@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`

### 2. Structure du projet 

Le projet a cette structure de dossiers :

* client (React)
  * components
  * pages
    * HomePage
    * JewelriesPage
    * CartPage
    * AdminPage
    * LoginSignupPage
    * SingleJewelryPage
  * App.jsx
  * index.js
* server (Node.js/Express)
  * models
  * routes
  * controllers
  * app.js
  * shared
    * db (MySQL)

### 3. Mise en place de la base de données 

Pour interagir avec MySQL en utilisant Node.js, j'ai utilisé un ORM comme Sequelize.

#### 3.1 Installation de Sequelize avec npm 

Création d'une instance MySQL en cours d'exécution. On peut le faire localement, ou utiliser un service d'hébergement 
de base de données.
Une fois que nous avons MySQL en place, on peut commencer à travailler avec Sequelize dans l'application Node.js. 

> Le but est de connecter Sequelize à la base de données et définir certains modèles.

1. Installation de Sequelize et du connecteur MySQL

`npm install --save sequelize
npm install --save mysql2
`

#### 3.2 Configuration de la connexion à la base de données 

Création d'un nouveau fichier database.js dans mon dossier de projet (voir le fichier database.js).

#### 3.3 Création de la base de données 

Par exemple, pour un utilisateur et un produit, on peut créer deux fichiers dans le dossier "models".
(voir les fichiers "userModel.js" et "jewelryModel.js"))

#### 3.4 Définition des modèles 

Dans le dossier "models" définir :

* User : pour stocker les informations sur les utilisateurs.
* Jewelry : pour stocker les informations sur les bijoux que je vends.
* Cart : pour stocker les informations sur les paniers d'achat des utilisateurs.
* CartItem : pour stocker les informations sur les articles spécifiques contenus dans un panier d'achat.
* Order : pour stocker les informations sur les commandes passées.
* OrderItem : pour stocker les informations sur les articles spécifiques contenus dans une commande.

> Remarque importante :
On a un dossier models où se trouve notre fichier "userModel.js", et un fichier database.js dans le dossier parent,
comme suit :
// /my-app(Sserver)
// │
// ├── /models
// │   └── userModel.js
// │
// └── /shared
//     └── database.js
Dans ce cas, ..//shared/database dans "userModel.js" fait référence à database.js dans le dossier parent.
La fonction require charge le module "database.js", permettant à "userModel.js" d'utiliser l'instance sequelize
configurée dans ce module. Si le fichier "database.js" se trouvait ailleurs, on devrait modifier le chemin
en conséquence. Si "database.js" est dans le même dossier que "userModel.js", on utiliserait simplement
require('./database'). Le point important est que ce chemin doit pointer vers le fichier qui exporte l'instance
de Sequelize qu'on avait configurée pour l'application.

### 4. Utilisation des modèles 
Une fois qu'on a défini nos modèles, on peut les utiliser pour interagir avec la BDD.
Par exemple, pour créer un nouvel utilisateur, ou un nouveau produit voir "userController.js" et "jewelryController.js"

> Remarque : il faut que le modèle Cart soit associé à User dans le fichier d'initialisation principal que ce soit :
> "app.js" (voir le fichier app.js)

Les modèles Order et OrderItem peuvent être créés de manière similaire aux autres modèles que nous avons.

> Remarque : L'Order pourrait inclure des informations sur l'utilisateur qui a passé la commande, 
> et l'OrderItem pourrait inclure des informations sur le produit spécifique qui a été commandé.