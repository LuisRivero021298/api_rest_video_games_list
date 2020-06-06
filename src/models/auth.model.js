'use strict'

const mysql_connection = require('../database.js');

const authModel = {
	signIn: (data, validate) => {
		let { email } = data;
		return new Promise((resolve, reject)=> {
			
			let query = 'SELECT id, password from users where email = ?';
			mysql_connection.query(query, [email], (err, rows) => {
				if(err || rows[0].length === 0){
					return reject(err);
				}
				resolve(rows[0]);
			});
		});
	},
	profile: (id) => {
		return new Promise((resolve, reject) => {
			mysql_connection.query('CALL profile(?)', [id], (err, rows) => {
				if (err || rows[0].length === 0){
					return reject(err);
				}
				resolve(rows[0]);
			})
		});
	}
}

module.exports = authModel;

