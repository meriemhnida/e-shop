const mongoose = require("mongoose");  


// Se connecter à la base de données
const mongoDB="mongodb+srv://admin:1LT1ZHFlNwrzaYBS@e-shop.4g6dkif.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));;


//product schema 
const productSchema = new mongoose.Schema({

    name: String,
    image: String,
    description:  String,
    brand: String,
    category:  String,
    price: String,
    countInStock: String,
    rating: String,
    numReviews: String

})

const Product= new mongoose.model("Product", productSchema)
module.exports =Product