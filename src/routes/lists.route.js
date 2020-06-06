'use strict'

const express = require('express');
const router = express.Router();
const listController = require('../controllers/list.controller.js');
const listValidation = require('../validations/ListValidations.js');
const { verifyToken } = require('../lib/global.js');

router.get('/lists/', verifyToken, listController.getByUserId);

router.post('/list', verifyToken, listValidation, listController.save);

router.put('/list/:id', listValidation, listController.update);

router.delete('/list/:id', listController.delete);

module.exports = router;