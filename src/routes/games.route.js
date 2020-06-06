'use strict'

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game.controller.js');
const gameValidator = require('../validations/GameValidations.js');

router.get('/game/:id', gameController.getById);
router.get('/games',  gameController.getGames);

router.post('/game', gameValidator, gameController.save);

router.put('/game/:id', gameValidator, gameController.update);

module.exports = router;

