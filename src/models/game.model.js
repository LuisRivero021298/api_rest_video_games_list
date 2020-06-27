"use strict";

const mysql_connection = require("../database.js");

const gameModel = {
  getGame: (idGame) => {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM games WHERE id_game = ?";

      mysql_connection.query(query, [idGame], (err, row) => {
        if (err) {
          return reject(err);
        }
        if (row.length === 0) {
          return reject("There is no Videogame");
        }
        resolve(row);
      });
    });
  },
  getAllGames: () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM games";

      mysql_connection.query(query, (err, rows) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("There is no Videogames");
        }
        resolve(rows);
      });
    });
  },
  getGamesByUser: (idUser) => {
    return new Promise((resolve, reject) => {
      let query = "CALL getGamesByUser(?)";

      mysql_connection.query(query, [idUser], (err, rows) => {
        if (err) {
          return reject(err);
        }
        if (rows.length === 0) {
          return reject("The users does not have videogames");
        }
        resolve(rows);
      });
    });
  },
};

module.exports = gameModel;

