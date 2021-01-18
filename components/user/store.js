const userModel = require('./model');

async function addUser(user) {
    let userToCreate = new userModel(user);
    return await userToCreate.save();
}

async function getUsers() {
    return await userModel.find();
}

function updateUser() {

}

function deleteUser() {

}

module.exports = {
    add: addUser,
    update: updateUser,
    delete: deleteUser,
    list: getUsers
}