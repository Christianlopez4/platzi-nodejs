const Model = require('./model');

function addChat(chat) {
    let newChat = new Model(chat);
    return newChat.save();
}

function listChats(userId) {
    return new Promise ( (resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = {
                users: userId
            }
        }

        Model.find(filter)
            .populate('users')
            .exec( (err, populated) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(populated);
                }
            })
        })
}


module.exports = {
    add: addChat,
    list: listChats
}