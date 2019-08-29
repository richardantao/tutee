const express = require("express");
const router = express.Router();
const controller = require("../controllers/email");

router.post("/", controller.beta);

router.post("/contact", controller.contact);

router.post("/designer", controller.designerApp);

router.post("/frontend", controller.frontendApp);

router.post("/backend", controller.backendApp);

router.post("/swift", controller.swiftApp);

router.post("/marketer", controller.marketerApp);