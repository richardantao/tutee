const router = require("express").Router();
const controller = require("../controllers/evaluations.controller");
const auth = require("../middleware/auth.middleware");

// @route /evaluations/
// @desc render all evaluations 
// @access PRIVATE
router.get("/", auth, controller.index);

// @route /evaluations/past
// @desc render all past evaluations 
// @access PRIVATE
router.get("/past", auth, controller.past);

// @route /evaluations/edit/:evaluationId
// @desc edit evaluation instance
// @access PRIVATE
router.get("/edit/:evaluationsId", auth, controller.edit);

// @route /evaluations/new
// @desc get form to add new evaluatio
// @access PRIVATE
router.get("/new", auth, controller.new);

// @route /evaluations/create
// @desc add new evaluation
// @access PRIVATE
router.post("/create", auth, controller.create);

// @route /evaluations/update/:evaluationId
// @desc update evaluation instance
// @access PRIVATE
router.put("/update/:evaluationId", auth, controller.update);

// @route /evaluations/delete/:evaluationId
// @desc delete evaluation instance
// @access PRIVATE
router.delete("/delete/:evaluationId", auth, controller.delete);

module.exports = router;