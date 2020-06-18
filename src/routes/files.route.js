"use strict";

const express = require("express");
const router = express.Router();
const multipar = require("connect-multiparty");
const md_upload = multipar({ uploadDir: "./src/public/images/" });
const fileController = require("../controllers/files.controller.js");

router.post("/upload-image", md_upload, fileController.uploadImage);

module.exports = router;
