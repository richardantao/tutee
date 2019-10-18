const router = require("express").Router();
const controller = require("../controllers/search.controller");
const auth = require("../middleware/auth.middleware");

// @route /search/
// @desc search blah blah blah
// @access PRIVATE
router.get("/", auth, controller.index);

module.exports = router;