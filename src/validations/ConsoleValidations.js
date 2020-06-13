'use strict'

const valid = require('validator');
let { noEmpty } = require('../lib/global.js');
let { responseJson } = require('../lib/global.js');

function validateConsole (req, res, next) {
	let noEmptys = noEmpty(Object.values(req.body), 3);
	if (!noEmptys) { return responseJson(res, 404, 'Missing Data') }

	let listOfDates = toDate([req.body.date_release, req.body.date_discontinued]);
	if(listOfDates === null) { return responseJson(res, 404, 'Not a date') }

	req.body.date_release = listOfDates[0];
	req.body.date_discontinued = listOfDates[1];

	next();
}

function toDate(listOfString = []) {
	let listOfDates = [];

	for(let i in listOfString){
		if (valid.toDate(listOfString[i]) === null){ return null }

		listOfDates.push(valid.toDate(listOfString[i]));
	}
	return listOfDates;
}


module.exports = validateConsole;

/**
 * {
	"name" : "Resident Evil 7",
	"date" : "2017-01-24",
	"genre" : "Survival Horror",
	"description" : "Cronológicamente, el título se ubica más de 4 años después de los acontecimientos de Resident Evil 6, en julio del año 2017. Ethan Winters es atraído a una plantación abandonada, en los alrededores de la ciudad de Dulvey en Luisiana, por un extraño mensaje de su esposa Mia, que ha estado desaparecida durante 3 años, y a la cual había dado por muerta.",
	"photo" : "residentEvil7.jpg"
}
 */