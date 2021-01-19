const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//esquema de mongoose que lo que hace es que a través de un objeto se pueden definir las propiedades 
const chatSchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'users'
        }
    ]
}); 

module.exports = mongoose.model('chat', chatSchema);