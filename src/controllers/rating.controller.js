'use strict'

const ratingModel = require('../models/rating.model.js');
let { responseJson } = require('../lib/global.js');
let { saveOrEdit } = require('../lib/global.js');

const controller = {
	save: (req, res) => {
		let data = Object.values(req.body);
		data.unshift(0);

		saveOrUpdate(data, res);
	},
	update: (req, res) => {
		if (!req.params.id) { return responseJson([res, 404, 'Unselected list']) }
		
		let data = Object.values(req.body);
		data.unshift(req.params.id);

		saveOrUpdate(data, res);
	},
	getByListId: (req, res) => {
		if (!req.params.id_list) { return responseJson([res, 404, 'Unselected list']) }

		ratingModel.getRating(req.params.id_list)
		.then( ratings => responseJson([res, 200, '', {ratings}]))
		.catch( err => responseJson([res, 404, `Error: ${err}`]));
	},
	delete: (req, res) => {
		if (!req.params.id) { return responseJson(res, 404, 'Unselected rating') }

		ratingModel.deleteRating(req.params.id)
		.then( deleted => responseJson([res, 200, '', {deleted}]))
		.catch( err => responseJson([res, 404, '', `Error: ${err}`]));
	}
}

const saveOrUpdate = (data , res) => {
	saveOrEdit('ratingAddOrEdit(?)', data)
	.then( rating => responseJson([res, 200, '', {rating}]))
	.catch( err => responseJson([res, 404, `Error: ${err}`]));
}

module.exports = controller;