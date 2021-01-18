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

function getMessages() {
    return new Promise( (resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    getMessages,
    addMessage
}