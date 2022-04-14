const mongoose = require('mongoose');

const User = require('../models/User.models')

let newUsers = [
    {
    user: "Jhon" ,
    lastName: "Smith",
    city: "Miami",
    zipCode: 33136,
    favoriteFood: "Pizza",
    morningOrNightPerson: "Morning Person"
  },
  {
    user: "Martha" ,
    lastName: "Washington",
    city: "Miami Beach" ,
    zipCode: 33139,
    favoriteFood: "burger",
    morningOrNightPerson: "Night Person"
  },
  {
    user: "Elon" ,
    lastName: "Musk" ,
    city: "Homestead" ,
    zipCode: 33032,
    favoriteFood: "Pasta"
  }
  ]

mongoose
  .connect('mongodb://localhost/DOhackathon') 
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

User.create(newUsers)
.then(function(results){
    console.log("Users Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})