'use strict'

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONSOLE_CONTROLLER = require('../controllers/ConsoleController.js');

ROUTER.get('/console/:id', CONSOLE_CONTROLLER.getById);

ROUTER.post('/console', CONSOLE_CONTROLLER.saveOrUpdate);

ROUTER.put('/console/:id', CONSOLE_CONTROLLER.saveOrUpdate);

ROUTER.delete('/console/:id', CONSOLE_CONTROLLER.delete);

module.exports = ROUTER;