'use strict'

const express = require('express');
const router = express.Router();
const { verifyToken } = require('../lib/global');
const gameController = require('../controllers/game.controller.js');
const gameValidator = require('../validations/GameValidations.js');

router.get('/game/:id', gameController.getById);
router.get('/games',  gameController.getGames);
router.get('/games-user', verifyToken, gameController.getGamesByUser);

router.post('/game', gameValidator, gameController.save);

router.put('/game/:id', gameValidator, gameController.update);

module.exports = router;

