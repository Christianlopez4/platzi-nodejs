//Lógica de almacenamiento
const Model = require('./model');

async function addMessage(message) {
    let msg = new Model(message);
    await msg.save();
}

async function getMessages() {
    return await Model.find();
}

async function updateMessage(id, message) {
    return await Model.findByIdAndUpdate(id, {message});
}

module.exports = {
    list: getMessages,
    add: addMessage,
    update: updateMessage
}