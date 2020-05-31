'use strict'

const MYSQL_CONNECTION = require('../database.js');
const VALIDATIONS = require('../validations/GameValidations.js');
let { responseJson } = require('../lib/responseJson.js');
let { saveOrEdit } = require('../lib/saveOrEdit.js');

let controller = {
	saveOrEdit: (req, res) => {
		let id = 0;
		if( req.params.id ){ id = req.params.id; }
		
		let validate = VALIDATIONS.gameValidate(req.body, id);
		let { name, date, genre } = req.body;
		let data = [ id, name, date, genre];

		saveOrEdit(validate, 'gameAddOrEdit(?)', data, res);

	},// ******** end save ********
	getById: (req, res) => {
		let { id } = req.params;
		let query = 'SELECT * FROM games WHERE id_game = ?';

		MYSQL_CONNECTION.query(query,[id],(err, rows, field) => {
			if (!err && rows.length !== 0) { responseJson(res, 200, '', rows[0]); }
			else { responseJson(res, 404, err); }
		});
	},
	delete: (req, res) => {

	}
}

module.exports = controller;