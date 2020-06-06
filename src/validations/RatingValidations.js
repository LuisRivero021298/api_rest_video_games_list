'use strict'

const valid = require('validator');
let { noEmpty } = require('../lib/global.js')
let { responseJson } = require('../lib/global.js');

function validateRating (req, res, next) {
	let data = numToString(req.body);
	let noEmptys = noEmpty(data, 4);
	if(!noEmptys) { return responseJson(res, 404, 'Missing Data') }
	
	if(req.body.rate > 10) { return  responseJson(res, 404, 'Rate is a number greater than allowed')}

	next();
}

function numToString(data) {
	let dataString = [];

	for (let i in data) {
		dataString.push(data[i].toString());
	}

	return dataString;
}

module.exports = validateRating;