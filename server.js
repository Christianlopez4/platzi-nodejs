const express = require('express');
const app = express(); 
const server = require('http').Server(app);
const cors = require('cors');
const config = require('./config');

const socket = require('./socket');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const url = config.dbURL;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus:200
}

db(url);
app.use(cors(corsOptions));
app.use(bodyParser.json()); 
app.use('/app', express.static('public'));
router(app);
socket.connect(server);

server.listen(config.port, () => {
    console.log(`La aplicación está escuchando por ${config.host}:${config.port}`);
});
