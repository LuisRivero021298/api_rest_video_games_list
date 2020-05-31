'use strict'

const MYSQL_CONNECTION = require('../database.js');
const VALIDATIONS = require('../validations/ConsoleValidations.js');
let { responseJson } = require('../lib/responseJson.js');
let { saveOrEdit } = require('../lib/saveOrEdit.js');

let controller = {
	saveOrUpdate: (req, res) => {
		let id = 0;
		if( req.params.id ){ id = req.params.id; }
		
		let validate = VALIDATIONS.consoleValidate(req.body, id);

		let { name, date_release, date_discontinued } = req.body;
		let data = [ id, name, date_release, date_discontinued];

		saveOrEdit(validate, 'consoleAddOrEdit(?)', data, res);

	},
	getById: (req, res) => {
		let { id } = req.params;
		let query = 'SELECT * FROM consoles WHERE id_console = ?';

		MYSQL_CONNECTION.query(query,[id],(err, rows, field) => {
			if (!err && rows.length !== 0) { responseJson(res, 200, '', rows[0]); }
			else { responseJson(res, 404, err); }
		});
	},
	delete: (req, res) => {
		let { id } = req.params;
		let query = 'DELETE FROM consoles WHERE id_console = ?';

		MYSQL_CONNECTION.query(query, [id],(err, rows,field) =>  {
			if (!err) {	responseJson(res,200,'',rows); } 
			else { responseJson(res,404, err); }
		});
	}
}

module.exports = controller;