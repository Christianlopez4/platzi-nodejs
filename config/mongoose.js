const mongoose = require('mongoose');

const url = 'mongodb+srv://db_user_platzi_nodejs:8wT0zb15JwsNsILl@cluster0.tyxbb.mongodb.net/test';

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(url);
console.log('[db] Connected succesfully');

module.exports = mongoose.connection;