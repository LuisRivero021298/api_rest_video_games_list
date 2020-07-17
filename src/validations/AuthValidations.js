"use strict";

const valid = require("validator");
let { noEmpty } = require("../lib/global.js");
let { responseJson } = require("../lib/global.js");

function validateLogin(req, res, next) {
  validateForm(req, res, 2);
  next();
}

function validateRegister(req, res, next) {
  validateForm(req, res, 4);
  next();
}

function validateEdit(req, res, next) {
  let noEmptys = noEmpty(Object.values(req.body), 3);
  if (!noEmptys) {
    return responseJson([res, 404, "Missing data"]);
  }
  next();
}

function validateForm(req, res, numImput) {
  let noEmptys = noEmpty(Object.values(req.body), numImput);
  if (!noEmptys) {
    return responseJson([res, 404, "Missing data"]);
  }

  let isEmail = valid.isEmail(req.body.email);
  if (!isEmail) {
    return responseJson([res, 404, "Invalid email"]);
  }

  if (req.body.password.length < 8) {
    return responseJson([res, 404, "Very short password"]);
  }
}

module.exports = { validateLogin, validateRegister, validateEdit };

