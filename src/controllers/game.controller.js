"use strict";

const gameModel = require("../models/game.model.js");
let { responseJson } = require("../lib/global.js");
let { saveOrEdit } = require("../lib/global.js");

const controller = {
  save: (req, res) => {
    let data = Object.values(req.body);
    data.unshift(0);

    console.log(data);
    saveOrUpdate(data, res);
  },
  update: (req, res) => {
    if (!req.params.id) {
      return responseJson([res, 404, "No game selected"]);
    }

    let data = Object.values(req.body);
    data.unshift(req.params.id);

    saveOrUpdate(data, res);
  },
  getGames: (req, res) => {
    gameModel
      .getAllGames()
      .then((games) => responseJson([res, 200, "", { games }]))
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
  getGamesByUser: (req, res) => {
    if (!req.userId) {
      return responseJson([res, 404, "Error: No Token provider"]);
    }

    gameModel
      .getGamesByUser(req.userId)
      .then((games) => responseJson([res, 200, "", { games }]))
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
  getById: (req, res) => {
    if (!req.params.id) {
      return responseJson([res, 404, "No game selected"]);
    }

    gameModel
      .getGame(req.params.id)
      .then((game) => responseJson([res, 200, "", { game }]))
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
};

function saveOrUpdate(data, res) {
  saveOrEdit("gameAddOrEdit(?)", data)
    .then((game) => responseJson([res, 200, "", { game }]))
    .catch((err) => responseJson([res, 404, `Error: ${err}`]));
}

module.exports = controller;

