"use strict";

const authModel = require("../models/auth.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config.js");
const { saveOrEdit } = require("../lib/global.js");
const { responseJson } = require("../lib/global.js");

const controller = {
  register: async (req, res) => {
    let data = await dataStructure(req.body, 0);

    saveOrEdit("userAdd(?)", data)
      .then((response) => {
        let expireIn = 60 * 60 * 24;
        let token = jwt.sign({ id: response.id }, config.secret, {
          expiresIn: expireIn,
        });
        responseJson([res, 200, "", { token, expireIn }]);
      })
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
  update: async (req, res) => {
    let id = req.userId;
    let data = await dataStructure(req.body, id);
    console.log(data);

    saveOrEdit("userEdit(?)", data)
      .then((response) => {
        responseJson([res, 200, "", { response }]);
      })
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
  signIn: (req, res) => {
    authModel
      .signIn(req.body)
      .then(async (response) => {
        let passwordValid = await comparePassword(
          req.body.password,
          response.password
        );

        if (!passwordValid) {
          return responseJson([res, 404, "Password invalid"]);
        }

        let expireIn = 60 * 60 * 24;
        let token = jwt.sign({ id: response.id }, config.secret, {
          expiresIn: expireIn,
        });
        responseJson([res, 200, "", { token, expireIn }]);
      })
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
  profile: (req, res) => {
    if (!req.userId) {
      return responseJson(res, 404, "No token provider");
    }
    authModel
      .profile(req.userId)
      .then((response) => responseJson([res, 200, "", { response }]))
      .catch((err) => responseJson([res, 404, `Error: ${err}`]));
  },
};

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

function comparePassword(password1, password2) {
  return bcrypt.compare(password1, password2);
}

function dataStructure(dataReceived, id) {
  return new Promise(async (resolve, reject) => {
    if (dataReceived.password !== undefined) {
      dataReceived.password = await encryptPassword(dataReceived.password);
    }
    let fullData = Object.values(dataReceived);
    fullData.unshift(id);

    resolve(fullData);
  });
}

module.exports = controller;
//end AuthController
