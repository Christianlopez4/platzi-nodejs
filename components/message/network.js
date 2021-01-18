//Encargada de recibir la petición HTTP, procesarla y enviarla al controlador
const express = require('express');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

router.get('/', (req, res) => {
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
    .then( (data) => {
        response.success(req, res, data);
    })
    .catch( (err) => {
        response.error(req, res, err, 400);
    });
});

module.exports = router;