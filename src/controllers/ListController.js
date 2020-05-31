'use strict'

const MYSQL_CONNECTION = require('../database.js');
const VALIDATIONS = require('../validations/ListValidations.js');
var { responseJson } = require('../lib/responseJson.js');
let { saveOrEdit } = require('../lib/saveOrEdit.js');

var controller = {
	saveOrEdit: (req, res) => {
		let id = 0;
		if( req.params.id ){ id = req.params.id; }
		
		let valid = VALIDATIONS.listValidate(req.body, id);
		let { name, id_user } = req.body;
		let data = [ id, name, id_user];

		saveOrEdit(validate, 'listAddOrEdit(?)', data, res);
	
	},// ******** end save ********
	getByUserId: (req, res) => {
		let { id } = req.params;
		id = parseInt(id,10);

		let query = 'SELECT * FROM lists where id_user = ?';

		MYSQL_CONNECTION.query(query, [id], (err, rows, field) => {
			if (!err && rows.length != 0) { responseJson(res, 200,'', rows); } 
			else { responseJson(res, 404, err); }
		})
	},// ******** end geByUserId ********
	delete: (req, res) => {
		let { id } = req.params;
		let query = 'DELETE FROM lists WHERE lists.id_list = ?';

		MYSQL_CONNECTION.query(query, [id], (err,rows, field) => {
			if (!err) { responseJson(res, 200,'', rows); } 
			else { responseJson(res, 404, err); }
		});
	}// ******** end delete ********
}

module.exports = controller;	