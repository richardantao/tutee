const router = require("express").Router();
const controller = require("../controllers/auth.controller");

router.post("/apply", controller.application);

router.post("/contact", controller.contact);

router.post("/invite", controller.invite)

router.post("/register", controller.register);

router.post("/signin", controller.signin);

router.delete("/signout", controller.signout);


module.exports = router;