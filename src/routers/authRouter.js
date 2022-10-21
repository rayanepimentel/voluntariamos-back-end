const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

router.post("/login", controller.validarUser);

module.exports = router;
