const router = require("express").Router();
const controller = require("../controllers/sessions.controller");

router.post("/signin", controller.signin);

router.delete("/signout", controller.signout);

module.exports = router;