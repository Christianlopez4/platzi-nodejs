const express = require('express');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then( (data) => {
            response.success(req, res, data, 201);
        })
        .catch( (err) => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', (req, res) => {
    controller.getChats(req.params.userId)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        })
})

module.exports = router;