"use strict";

const fs = require("fs");
const path = require("path");
const { responseJson } = require("../lib/global.js");

const controller = {
  uploadImage: (req, res) => {
    if (Object.keys(req.files).length === 0) {
      return responseJson([res, 404, "Nana"]);
    }

    if (req.params.name) {
      deleteImage(req.params.name);
    }

    const filePath = req.files[0].path;
    const [fileName, fileExt] = imageName(filePath);
    const fileComplete = `${fileName}.${fileExt}`;
    const validExt = validExtension(fileExt);

    if (!validExt) {
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        return responseJson([res, 404, "File not allowed"]);
      });
    } else {
      return responseJson([res, 200, "", { fileComplete }]);
    }
  },
  getImage: (req, res) => {
    const nameImage = req.params.name;
    const filePath = `./src/public/images/${nameImage}`;

    fs.exists(filePath, (exists) => {
      if (!exists) {
        return responseJson([res, 404, "File not exists"]);
      }

      return res.sendFile(path.resolve(filePath));
    });
  },
};

function imageName(path) {
  const fileSplit = path.split("/");
  const fileName = fileSplit[3];
  const file = fileName.split(".");

  return file;
}

function validExtension(ext) {
  if (ext !== "jpg" && ext !== "jpeg" && ext !== "png") {
    return false;
  }

  return true;
}

function deleteImage(name) {
  const filePath = `./src/public/images/${name}`;
  fs.unlink(filePath, (err) => {
    if (err) throw err;
  });
}

module.exports = controller;
