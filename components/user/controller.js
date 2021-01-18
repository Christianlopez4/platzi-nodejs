const store = require('./store');

function addUser(name) {
    return new Promise( (resolve, reject) => {
        if (!name) {
            reject('Nombre ingresado no válido');
        } else {
            let user = {
                name,
            }
            resolve(store.add(user));
        }
    });
}

function getUsers() {
    return new Promise ( (resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addUser,
    getUsers
}