"use strict";

const valid = require("validator");
const jwt = require("jsonwebtoken");
const config = require("../config.js");

let { responseJson } = require("../lib/global.js");

function validateList(req, res, next) {
  try {
    let validateUser = !valid.isEmpty(req.body.name_list);
    let validateId = !valid.isEmpty(req.body.id_user);
  } catch {
    return responseJson([res, 404, "Missing data"]);
  }

  const decoded = jwt.verify(req.body.id_user, config.secret);
  req.body.id_user = decoded.id;
  next();
}

module.exports = validateList;
