const express = require('express');
const app = express(); 
const server = require('http').Server(app);
const cors = require('cors');

const socket = require('./socket');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const url = '';

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

server.listen(3000, () => {
    console.log('La aplicación está escuchando por en http://localhost:3000');
});
