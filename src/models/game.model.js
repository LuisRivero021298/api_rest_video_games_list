'use strict' 

const mysql_connection = require('../database.js');

const gameModel = {
	getGame: (idGame) => {
		return new Promise((resolve, reject) => {
			let query = 'SELECT * FROM games WHERE id_game = ?';

			mysql_connection.query(query,[idGame],(err, row) => {
				if (err && row.length === 0) { return reject(err) }
				resolve(row);
			});
		});
	},
	getAllGames: () => {
		return new Promise((resolve, reject) => {
			let query = 'SELECT * FROM games';

			mysql_connection.query(query, (err, rows) => {
				if (err && rows.length === 0) { return reject(err) }
				resolve(rows);
			})
		});
	}
}

module.exports = gameModel;