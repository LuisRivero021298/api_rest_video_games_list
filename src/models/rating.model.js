'use strict'

const mysql_connection = require('../database.js');

const ratingModel = {
	getRating: (id) => {
		return new Promise( (resolve, reject) => {
			let query = 'CALL getRating(?)';

			mysql_connection.query(query,[id], (err, rows) => {
				console.log(rows[0]);
				if (err || rows[0].length === 0) { return reject(err) } 
				resolve(rows[0]);
			});
		});
	},
	deleteRating: (id) => {
		return new Promise( (resolve, reject) => {
			let query = 'DELETE FROM ratings WHERE ratings.id_rating = ?';

			mysql_connection.query(query,[id], (err, row, field) => {
				if (err && rows.affectedRows === 0) { return reject(err) } 
				resolve(row);
			});
		});
	}
}

module.exports = ratingModel;