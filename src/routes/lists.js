'use strict'

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LIST_CONTROLLER = require('../controllers/ListController.js');

ROUTER.get('/lists/:id', LIST_CONTROLLER.getByUserId);

ROUTER.post('/list', LIST_CONTROLLER.saveOrEdit);

ROUTER.put('/list/:id', LIST_CONTROLLER.saveOrEdit);

ROUTER.delete('/list/:id', LIST_CONTROLLER.delete);

module.exports = ROUTER;