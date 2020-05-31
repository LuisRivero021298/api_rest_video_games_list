'use strict'

const MYSQL_CONNECTION = require('../database.js');
const VALIDATIONS = require('../validations/UserValidations.js');
let { responseJson } = require('../lib/responseJson.js');
let { saveOrEdit } = require('../lib/saveOrEdit.js');

let controller = {
	saveOrUpdate: (req, res) => {
		let id = 0;
		if( req.params.id ){ id = req.params.id; }
		
		let validate = VALIDATIONS.userValidate(req.body, id);
		let {username, email, password, photo, birthdate} = req.body;
		let data = [id, username, email, password, photo, birthdate];

		saveOrEdit(validate, 'userAddOrEdit(?)', data, res);
		
	},// ******** end save ********
	login: (req, res) => {
		let { email, password } = req.body;
		MYSQL_CONNECTION.query('SELECT * from users where email = ? AND password = ?', [email, password],
		(err, rows, field) => {
			if(!err & rows.length !== 0){
				responseJson(res, 200, '', rows[0])
			} else {
				responseJson(res, 404, `Error: ${err}`);
			}
		});
	},
	getById: (req, res) => {
		let {id} = req.params;

		MYSQL_CONNECTION.query('SELECT * from users where id = ?', [id], 
		(err, rows, field) => {
			if(!err && rows.length != 0){
				responseJson(res, 200, '', rows[0]);
			} else {
				responseJson(res, 404, `Error: ${err}`);
			}
		});
	}// ******** end getById ********
}

module.exports = controller;