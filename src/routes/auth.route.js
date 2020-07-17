"use strict";

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");
const authValidation = require("../validations/AuthValidations.js");
const { verifyToken } = require("../lib/global.js");

router.get("/profile", verifyToken, authController.profile);

router.post("/signin", authValidation.validateLogin, authController.signIn);
router.post(
  "/register",
  authValidation.validateRegister,
  authController.register
);

router.put(
  "/update",
  verifyToken,
  authValidation.validateEdit,
  authController.update
);

module.exports = router;

