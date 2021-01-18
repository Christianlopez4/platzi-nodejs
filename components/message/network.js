//Encargada de recibir la petición HTTP, procesarla y enviarla al controlador
const express = require('express');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

router.get('/', (req, res) => {
    const filter = req.query.user || null;
    controller.getMessages(filter)
    .then( (data) => {
        response.success(req, res, data, 200);
    })
    .catch( (err) => {
        response.error(req, res, 'Unexpected error', 500, err);
    })
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

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Error interno', 500, err);
        });
});

module.exports = router;