"use strict";

const mysql_connection = require("../database.js");

const consoleModel = {
  getConsole: (id) => {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM consoles WHERE id_console = ?";

      mysql_connection.query(query, [id], (err, rows, field) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("Console does not exist");
        }
        resolve(rows);
      });
    });
  },
  getAllConsoles: () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM consoles";

      mysql_connection.query(query, (err, rows) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("There are no consoles");
        }
        resolve(rows);
      });
    });
  },
  getConsoleByUser: (idUser) => {
    return new Promise((resolve, reject) => {
      let query = "CALL getConsolesByUser(?)";

      mysql_connection.query(query, [idUser], (err, rows) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("There are no consoles");
        }
        resolve(rows);
      });
    });
  },
  deleteConsole: (id) => {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM consoles WHERE id_console = ?";

      mysql_connection.query(query, [id], (err, rows, field) => {
        if (err) {
          return reject(err);
        }
        if (rows.affectedRows === 0) {
          return reject("No delete console");
        }
        resolve(rows);
      });
    });
  },
};

module.exports = consoleModel;
