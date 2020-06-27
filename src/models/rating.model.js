"use strict";

const mysql_connection = require("../database.js");

const ratingModel = {
  getRating: (id) => {
    return new Promise((resolve, reject) => {
      let query = "CALL getRating(?)";

      mysql_connection.query(query, [id], (err, rows) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("This list doest not have a ratings");
        }
        resolve(rows[0]);
      });
    });
  },
  deleteRating: (id) => {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM ratings WHERE ratings.id_rating = ?";

      mysql_connection.query(query, [id], (err, row, field) => {
        if (err) {
          return reject(err);
        }
        if (rows.affectedRows === 0) {
          return reject("Rating was not removed");
        }
        resolve(row);
      });
    });
  },
};

module.exports = ratingModel;

