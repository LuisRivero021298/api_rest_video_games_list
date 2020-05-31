'use strict'

const MYSQL_CONNECTION = require('../database.js');
const VALIDATIONS = require('../validations/RatingValidations.js');
let { responseJson } = require('../lib/responseJson.js');
let { saveOrEdit } = require('../lib/saveOrEdit.js');

let controller = {
	saveOrUpdate: (req, res) => {
		let id = 0;
		if( req.params.id ){ id = req.params.id; }
		
		let validate = VALIDATIONS.ratingValidate(req.body, id);
		let { id_list, id_game, id_console, rate } = req.body;
		let data = [ id, id_list, id_game, id_console, rate];

		saveOrEdit(validate, 'ratingAddOrEdit(?)', data, res);

	},// ******** end saveOrEdit ********
	getByListId: (req, res) => {
		let { id } = req.params;
		let query = 'CALL getRating(?)';

		MYSQL_CONNECTION.query(query,[id], (err, rows, field) => {
			if (!err && rows.length !== 0) { responseJson(res, 200,'', rows); } 
			else { responseJson(res, 404, err); }
		});
	},// ******** end getByListId ********
	delete: (req, res) => {
		let { id } = req.params;
		let query = 'DELETE FROM ratings WHERE ratings.id_rating = ?';

		MYSQL_CONNECTION.query(query,[id], (err, rows, field) => {
			if (!err && rows.length !== 0) { responseJson(res, 200,'', rows); } 
			else { responseJson(res, 404, err); }
		});

	}// ******** end delete ********
}

module.exports = controller;