'use strict'

const valid = require('validator');
let { noEmpty } = require('../lib/global.js');
let { responseJson } = require('../lib/global.js');

function validGame (req, res, next) {
	let noEmptys = noEmpty(Object.values(req.body), 5);
	if (!noEmptys) { return responseJson(res, 404, 'Missing Data') }

	let toDate = valid.toDate(req.body.date);
	if( toDate === null ) { return responseJson(res, 404, 'No a Date')}
	req.body.date = toDate;

	next();
}

module.exports = validGame;