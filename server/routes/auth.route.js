const router = require("express").Router();
const controller = require("../controllers/auth.controller");

router.post("/signup", controller.signup);

router.post("/signin", controller.signin);

router.delete("/signout", controller.signout);

module.exports = router;