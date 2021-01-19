//Encargada de recibir la petición HTTP, procesarla y enviarla al controlador
const express = require('express');
//1. agrego multer: Módulo para transmisión y gestión de archivos
const multer = require('multer');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

//2. preparamos multer para subir los archivos donde nos interesa
const upload = multer({
    dest: 'public/files/',
})

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
//Añado a la funcion addmessage el file (req.file)
router.post('/', upload.single('file'), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then( () => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Error interno', 500, err);
        })
})

module.exports = router;