'use strict'

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const RATING_CONTROLLER = require('../controllers/RatingController.js');

ROUTER.get('/rating/:id', RATING_CONTROLLER.getByListId);

ROUTER.post('/rating', RATING_CONTROLLER.saveOrUpdate);

ROUTER.put('/rating/:id', RATING_CONTROLLER.saveOrUpdate);

ROUTER.delete('/rating/:id', RATING_CONTROLLER.delete);

module.exports = ROUTER;