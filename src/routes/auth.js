'use strict' 

const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController.js');
const verifyToken = require('../lib/verifyToken.js');
const authValidation = require('../validations/AuthValidations.js');

router.get('/profile', verifyToken, authController.profile);

router.post('/signin', authController.signIn);
router.post('/register', authValidation, authController.register);

router.put('/update', verifyToken, authValidation, authController.update);

module.exports = router;