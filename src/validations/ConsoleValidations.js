'use strict'

const valid = require('validator');
let { noEmpty } = require('../lib/global.js');
let { responseJson } = require('../lib/global.js');

function validateConsole (req, res, next) {
	let noEmptys = noEmpty(Object.values(req.body), 3);
	if (!noEmptys) { return responseJson([res, 404, 'Missing Data']); }

	let listOfDates = toDate([req.body.date_release, req.body.date_discontinued]);
	if(listOfDates === null) { return responseJson([res, 404, 'Not a date']); }

	req.body.date_release = listOfDates[0];
	req.body.date_discontinued = listOfDates[1];

	next();
}

function toDate(listOfString = []) {
	let listOfDates = [];

	for(let i in listOfString){
		if (valid.toDate(listOfString[i]) === null){ return null; }

		listOfDates.push(valid.toDate(listOfString[i]));
	}
	return listOfDates;
}


module.exports = validateConsole;