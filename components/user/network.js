const express = require('express');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getUsers()
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Unexpected error', 500, err);
        })
})

router.post('/', (req, res) => {
    controller.addUser(req.body.username)
        .then( (data) => {
            response.success(req, res, data, 201);
        })
        .catch( (err) => {
            response.error(req, res, 'Unexpected error', 500, err);
        })
})

module.exports = router;