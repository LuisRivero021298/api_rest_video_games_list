'use strict'

const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

function validateList(req, res, next) {
	try {
		let validateUser = !VALID.isEmpty(req.body.nameList)
	} catch {
		return responseJson(res, 404, 'Missing data');
	}
	next();
}

module.exports = validateList;
