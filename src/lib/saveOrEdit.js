'use strict'

const mysql_connection = require('../database.js');
let { responseJson } = require('./responseJson.js');

let saveOrEdit = (procedure, data) => {
	return new Promise( (resolve, reject) => {
			let query = `CALL ${procedure}`;
			mysql_connection.query(query, [data], (err, rows, field) => {
				if (err || rows.length === 0) { return reject(err) }
				resolve(rows[0][0]); 
			});
	});
};


module.exports = { saveOrEdit };