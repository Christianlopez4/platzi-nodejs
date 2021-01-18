//Archivo con la lógica de negocio
const store = require('./store');

function addMessage(user, message) {
    return new Promise( (resolve, reject) => {
        if(!user || !message) {
            reject('Los datos ingresados no son correctos');
        } else {
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }
            
            store.add(fullMessage);

            resolve(fullMessage);
        }
    });

}

function getMessages(filter) {
    return new Promise( (resolve, reject) => {
        resolve(store.list(filter));
    });
}

function updateMessage(id, message) {
    return new Promise( (resolve, reject) => {
        if (!id || !message) {
            reject('Datos ingresados no válidos');
        } else {
            resolve(store.update(id, message));
        }
    })
}

module.exports = {
    getMessages,
    addMessage,
    updateMessage
}