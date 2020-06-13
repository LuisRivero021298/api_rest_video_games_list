'use strict'

const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating.controller.js');
const ratingValidation = require('../validations/RatingValidations.js');

router.get('/rating/:id_list', ratingController.getByListId);

router.post('/rating', ratingValidation, ratingController.save);

router.put('/rating/:id', ratingValidation, ratingController.update);

router.delete('/rating/:id', ratingController.delete);

module.exports = router;