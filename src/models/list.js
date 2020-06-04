'use strict'

const MYSQL_CONNECTION = require('../database.js');

const listModel = {
	getUser: (idUser) => {
		return new Promise((resolve, reject) => {
			let query = 'SELECT id_list, name_list FROM lists where id_user = ?';

			MYSQL_CONNECTION.query(query, [idUser], (err, rows) => {
				if(err || rows[0].length === 0) {
					return reject(err);
				}
				resolve(rows);
			})
		});
	},
	deleteList: (idList) => {
		return new Promise((resolve, reject) => {
			let query = 'DELETE FROM lists WHERE lists.id_list = ?';

			MYSQL_CONNECTION.query(query, [idList], (err,rows, field) => {
				if (err || rows.affectedRows === 0 ) { return reject(err) } 
				resolve(rows);
			});
		});
	}
}

module.exports = listModel;