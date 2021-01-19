const express = require('express');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const url = 'mongodb+srv://db_user_platzi_nodejs:8wT0zb15JwsNsILl@cluster0.tyxbb.mongodb.net/test';

db(url);
var app = express(); 
app.use(bodyParser.json()); 
router(app);
app.listen(3000);
