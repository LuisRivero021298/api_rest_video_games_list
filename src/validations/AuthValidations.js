'use strict'

const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

function validateAuth(req, res, next) {
	let objectSize = Object.keys(req.body).length;
	if(objectSize > 2){
		validateRegister(req, res, next);
	} else {
		validateLogin(req, res, next);
	}
}

function validateRegister(req, res, next) {
	try {
		let validateAll = {
			validateUser: !VALID.isEmpty(req.body.username),
			validateEmail: !VALID.isEmpty(req.body.email),
			validatePass: !VALID.isEmpty(req.body.password),
			validatePhoto: !VALID.isEmpty(req.body.photo),
			validateBirth: !VALID.isEmpty(req.body.birthdate)
		}
	} catch {
		return responseJson(res, 404, 'Missing data');
	}
	next();
}

function validateLogin(req, res, next) {
	try {
		let validateAll = {
			validateEmail: !VALID.isEmpty(req.body.email),
			validatePass: !VALID.isEmpty(req.body.password),
		}
	} catch {
		return responseJson(res, 404, 'Missing data');
	}
	next();
}

module.exports = validateAuth;