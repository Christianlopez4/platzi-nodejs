const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function connect(url) {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useUnifiedTopology", true);
    await mongoose.connect(url);
    console.log('[db] Connected succesfully');
}

module.exports = connect;