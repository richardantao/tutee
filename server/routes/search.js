const express = require("express");
const router = express.Router();
const controller = require("../controllers/search");

app.get("/", controller.index);

module.exports = router;