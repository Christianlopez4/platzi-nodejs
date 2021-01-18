const express = require('express');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const url = '';

db(url);
var app = express(); 
app.use(bodyParser.json()); 
router(app);
app.listen(3000);
