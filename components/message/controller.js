//Archivo con la lógica de negocio

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
            resolve(fullMessage);
        }
    });

}

module.exports = {
    addMessage
}