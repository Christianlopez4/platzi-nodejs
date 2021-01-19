//Lógica de almacenamiento
const Model = require('./model');

async function addMessage(message) {
    let msg = new Model(message);
    await msg.save();
}

async function getMessages(filter) {
    return new Promise( (resolve, reject) => {
        let filterUser = {};
        if (filter != null) {
            filterUser = {user: filter};
        }
        //Esto se hace para la presentación de la info. Le estamos diciendo que vuelque la información de los usuarios por como lo establecimos en el modelo (user)
        Model.find(filterUser)
            .populate('user')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(populated);
                }
            });
    })

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