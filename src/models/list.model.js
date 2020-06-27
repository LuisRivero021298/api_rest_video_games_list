"use strict";

const mysql_connection = require("../database.js");

const listModel = {
  getListsUser: (idUser) => {
    return new Promise((resolve, reject) => {
      let query =
        "SELECT id_list, name_list, photo_list FROM lists where id_user = ?";

      mysql_connection.query(query, [idUser], (err, rows) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("Don't Have lists");
        }
        resolve(rows);
      });
    });
  },
  deleteList: (idList) => {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM lists WHERE lists.id_list = ?";

      mysql_connection.query(query, [idList], (err, rows, field) => {
        if (err) {
          return reject(err);
        }
        if (rows.affectedRows === 0) {
          return reject("No delete");
        }
        resolve(rows);
      });
    });
  },
};

module.exports = listModel;

