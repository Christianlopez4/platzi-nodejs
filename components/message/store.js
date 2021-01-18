//Lógica de almacenamiento
const Model = require('./model');

function addMessage(message) {
    let msg = new Model(message);
    msg.save();
}

async function getMessages() {
    return await Model.find();
}

module.exports = {
    list: getMessages,
    add: addMessage
}