const express = require("express");
const router = express.Router();
const controller = require("../controllers/email");

// POST to beta database and send email when user submits index form
router.post("/", controller.beta);

// POST contact form to send email when user submits 'Contact Us' form 
router.post("/contact", controller.contact);

// POST designer app to email through nodemailer
router.post("/designer", controller.designerApp);

// POST react app to email through nodemailer
router.post("/frontend", controller.frontendApp);

// POST node app to email through nodemailer
router.post("/backend", controller.backendApp);

// POST swift app to email through nodemailer
router.post("/swift", controller.mobileApp);

// POST marketing app to email through nodemailer
router.post("/marketer", controller.marketerApp);

module.exports = router;