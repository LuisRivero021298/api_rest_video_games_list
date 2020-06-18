"use strict";

const fs = require("fs");
const path = require("path");
const { responseJson } = require("../lib/global.js");

const controller = {
  uploadImage: (req, res) => {
    const filePath = req.files.file0.path;
    const file = imageName(filePath);
    const fileName = `${file[0]}.${file[1]}`;
    const fileExt = file[1];
    const validExt = validExtension(fileExt);
    console.log(validExt);

    if (!validExt) {
      fs.unlink(filePath, (err) => {
        if (err) throw err;

        return responseJson([res, 404, "File not allowed"]);
      });
    } else {
      return responseJson([res, 200, "", { fileName }]);
    }
  },
  getImage: (req, res) => {
    const nameImage = req.params.name;
    const pathFile = `./src/public/images/${nameImage}`;

    fs.exists(pathFile, (exists) => {
      if (!exists) {
        return responseJson([res, 404, "File not exists"]);
      }

      return res.sendFile(path.resolve(pathFile));
    });
  },
};

const imageName = (path) => {
  const fileSplit = path.split("/");
  const fileName = fileSplit[3];
  const file = fileName.split(".");

  return file;
};

const validExtension = (ext) => {
  if (ext !== "jpg" && ext !== "jpeg" && ext !== "png") {
    return false;
  }

  return true;
};

module.exports = controller;
