const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const validate = require("../middleware/validation/auth.validation");

// @route /apply
// @desc submits job application
// @access PUBLIC
router.post("/apply", validate.application, controller.application);

// @route /contact
// @desc submits contact form on root domain
// @access PUBLIC
router.post("/contact", validate.contact, controller.contact);

// @route /invite
// @desc submits beta invite form on root domain
// @access PUBLIC
router.post("/invite", validate.invite, controller.invite)

// @route /register
// @desc signs user up for application
// @access PUBLIC
router.post("/register", validate.register, controller.register);

// @route /signin
// @desc creates user session to access application
// @access PUBLIC
router.post("/signin", validate.signin, controller.signin);

// @route /signout
// @desc kills user's application session
// @access PRIVATE
router.delete("/signout", validate.signout, controller.signout);

module.exports = router;