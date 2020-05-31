'use strict'

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const USER_CONTROLLER = require('../controllers/UserController.js');

ROUTER.get('/user/:id', USER_CONTROLLER.getById);

ROUTER.post('/user', USER_CONTROLLER.saveOrUpdate);
ROUTER.post('/user/login', USER_CONTROLLER.login);

ROUTER.put('/user/:id', USER_CONTROLLER.saveOrUpdate);

module.exports = ROUTER;