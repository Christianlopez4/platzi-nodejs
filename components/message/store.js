//Lógica de almacenamiento
const Model = require('./model');

async function addMessage(message) {
    let msg = new Model(message);
    await msg.save();
}

async function getMessages(filter) {
    let filterUser = {};
    if (filter != null) {
        filterUser = {user: filter};
    }
    return await Model.find(filterUser);
}

async function updateMessage(id, message) {
    return await Model.findByIdAndUpdate(id, {message});
}

async function deleteMessage(id) {
    return await Model.deleteOne({
        _id: id
    })
}

module.exports = {
    list: getMessages,
    add: addMessage,
    update: updateMessage,
    delete: deleteMessage
}