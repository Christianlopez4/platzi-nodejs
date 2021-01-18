const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//esquema de mongoose que lo que hace es que a través de un objeto se pueden definir las propiedades 
const userSchema = new Schema({
    name: String
}); 

module.exports = mongoose.model('users', userSchema);