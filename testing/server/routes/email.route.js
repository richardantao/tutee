const router = require("express").Router();
const controller = require("../controllers/email.controller");

router.post("/beta", controller.beta);

router.post("/contact", controller.contact);

module.exports = router;