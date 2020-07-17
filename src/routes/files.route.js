"use strict";

const express = require("express");
const router = express.Router();
let multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/images/"); // Agregamos el directorio donde se guardarán los archivos.
  },
  filename: function (req, file, cb) {
    let date = new Date();
    let formattedDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();

    cb(null, formattedDate + file.originalname);
  },
});
let upload = multer({ storage });
const fileController = require("../controllers/files.controller.js");

router.post("/upload-image", upload.any(), fileController.uploadImage);

router.get("/image/:name", fileController.getImage);

router.put("/update-image/:name", upload.any(), fileController.uploadImage);

module.exports = router;
