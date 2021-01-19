//Archivo con la lógica de negocio
const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file) {
    return new Promise( (resolve, reject) => {
        if(!chat || !user || !message) {
            reject('Los datos ingresados no son correctos');
        } else {
            let fileURL = '';
            if (file) {
                fileURL = `http://localhost:3000/app/files/${file.filename}`;
            }

            const fullMessage = {
                chat,
                user,
                message,
                date: new Date(),
                file: fileURL
            }
            
            store.add(fullMessage);

            socket.io.emit('message', fullMessage);

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

function deleteMessage(id) {
    return new Promise ( (resolve, reject) => {
        if (!id) {
            reject('ID ingresado no válido');
        } else {
            resolve(store.delete(id));
        }
    });
}

module.exports = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage
}