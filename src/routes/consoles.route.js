'use strict'

const express = require('express');
const router = express.Router();
const consoleController = require('../controllers/console.controller.js');
const consoleValidation = require('../validations/ConsoleValidations.js');

router.get('/console/:id', consoleController.getById);
router.get('/consoles', consoleController.getConsoles);

router.post('/console', consoleValidation, consoleController.save);

router.put('/console/:id', consoleValidation, consoleController.update);

router.delete('/console/:id', consoleController.delete);

module.exports = router;