'use strict'

const express = require('express');
const router = express.Router();
const verifyToken = require('../lib/verifyToken.js');
const listController = require('../controllers/ListController.js');
const listValidation = require('../validations/ListValidations.js');

router.get('/lists/', verifyToken, listController.getByUserId);

router.post('/list', verifyToken, listValidation, listController.save);

router.put('/list/:id', listValidation, listController.update);

router.delete('/list/:id', listController.delete);

module.exports = router;