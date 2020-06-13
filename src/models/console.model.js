'use strict' 

const mysql_connection = require('../database.js');

const consoleModel = {
	getConsole: (id) => {
		return new Promise((resolve, reject ) => {
			let query = 'SELECT * FROM consoles WHERE id_console = ?';

			mysql_connection.query(query,[id],(err, rows, field) => {
				if (err || rows.length === 0) { return reject(err); }
				resolve(rows);
			});
		});
	},
	getAllConsoles: () => {
		return new Promise((resolve, reject) => {
			let query = 'SELECT * FROM consoles';

			mysql_connection.query(query, (err, rows) => {
				if (err || rows.length === 0) { return reject(err); }
				resolve(rows);
			});
		});
	},
	getConsoleByUser: (idUser) => {
		return new Promise((resolve, reject) => {
			let query = 'CALL getConsolesByUser(?)';

			mysql_connection.query(query, [idUser], (err, rows) =>{
				if(err) { return reject(err); }
				resolve(rows);
			});
		});
	},
	deleteConsole: (id) => {
		return new Promise((resolve, reject) => {
			let query = 'DELETE FROM consoles WHERE id_console = ?';

			mysql_connection.query(query, [id], (err, rows,field) =>  {
				if (err || rows.affectedRows === 0 ) { return reject(err); } 
				resolve(rows);
			});
		})
	}
}

module.exports = consoleModel;
