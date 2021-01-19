const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//esquema de mongoose que lo que hace es que a través de un objeto se pueden definir las propiedades 
const messageSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    message: {type: String, required: true},
    date: Date
}); 

module.exports = mongoose.model('messages', messageSchema);