"use strict";

const mysql_connection = require("../database.js");
const jwt = require("jsonwebtoken");
const config = require("../config.js");
const valid = require("validator");

/*
 *	params: res = res, status:number, message: string, data: object
 */
function responseJson([res = null, status = 0, message = null, data = {}]) {
  // Server response
  console.log(status);
  if (status !== 200) {
    return res.status(status).json({
      status: "error",
      message,
    });
  }
  return res.status(status).json({
    status: "success",
    data,
  });
}

function saveOrEdit(procedure, data) {
  return new Promise((resolve, reject) => {
    let query = `CALL ${procedure}`;
    mysql_connection.query(query, [data], (err, rows) => {
      if (err) {
        return reject(err);
      }
      if (rows.length === 0) {
        return reject("It has not been created");
      }
      resolve(rows[0]);
    });
  });
}

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token || token.length === 0) {
    return responseJson(res, 401, `Error: No token provided`);
  }

  const decoded = jwt.verify(token, config.secret);
  req.userId = decoded.id;
  next();
}

/*
 * [noEmpty verify that the necessary inputs are not empty]
 * @param  {[object]} body
 * @param  {[number]} numImput [Number of inputs to review]
 * @return {[boleean]}
 */
function noEmpty(body, numImput) {
  try {
    for (let i = 0; i < numImput; i++) {
      let validEmpty = !valid.isEmpty(body[i]);
    }
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  responseJson,
  saveOrEdit,
  verifyToken,
  noEmpty,
};

