'use strict'

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LIST_CONTROLLER = require('../controllers/GameController.js');

ROUTER.get('/game/:id', LIST_CONTROLLER.getById);

ROUTER.post('/game', LIST_CONTROLLER.saveOrEdit);

ROUTER.put('/game/:id', LIST_CONTROLLER.saveOrEdit);

ROUTER.delete('/game/:id', LIST_CONTROLLER.delete);

module.exports = ROUTER;

