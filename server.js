const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

router.get('/message', (req, res) => {
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.headers);

    res.header({
        "custome-header": "Nuestro header personalizado"
    });

    response.success(req, res, 201, 'Creado correctamente');
});

app.listen(3000);
