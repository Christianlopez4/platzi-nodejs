const express = require('express');
const router = require('./network/routes');
const bodyParser = require('body-parser');

var app = express(); 
app.use(bodyParser.json()); 
router(app);
app.listen(3000);
