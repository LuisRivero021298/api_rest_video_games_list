'use strict'

const MYSQL_CONNECTION = require('../database.js');
let { responseJson } = require('./responseJson.js');

let saveOrEdit = (validate, procedure, data, res) => {

  if(validate) {
  	
		let query = `CALL ${procedure}`;
	
		MYSQL_CONNECTION.query(query, [data], (err, rows, field) => {
				if (!err) { responseJson(res, 200, '', rows); } 
				else { responseJson(res, 404, err); }
			});
  } else{
		return  responseJson(res, 404, 'It has not been validated');
 	}
};

module.exports = { saveOrEdit };