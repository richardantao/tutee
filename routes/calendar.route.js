const router = require("express").Router();
const controller = require("../controllers/calendar.controller");
const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validation/classes.validation");

// @route /calendar/
// @desc display default calendar view
// @ access PRIVATE
router.get("/", auth, controller.index);

// @route /calendar/month
// @desc display month calendar view
// @ access PRIVATE
router.get("/month", auth, controller.month);

// @route /calendar/week
// @desc display week calendar view
// @ access PRIVATE
router.get("/week", auth, controller.week);

// @route /calendar/day
// @desc display day calendar view
// @ access PRIVATE
router.get("/day", auth, controller.day);

// @route /calendar/agenda
// @desc display user's agenda
// @ access PRIVATE
router.get("/agenda", auth, controller.agenda);

// @route /calendar/classes/edit/classId
// @desc edit class instance
// @access PRIVATE
router.get("/classes/edit/", auth, controller.classEdit);

// @route /calendar/classes/new
// @desc get form to add new class
// @access PRIVATE
router.get("/classes/new", auth, controller.classNew);

// @route /calendar/classes/create
// @desc create new class in calendar page
// @ access PRIVATE
router.post("/classes/create", auth, validate.create, controller.classCreate);

// @route /calendar/classes/update/classId
// @desc display default calendar view
// @ access PRIVATE
router.put("/classes/update/:classId", auth, validate.update, controller.classUpdate);

// @route /calendar/classes/delete/classId
// @desc display default calendar view
// @ access PRIVATE
router.delete("/classes/delete/:classid", auth, validate.delete, controller.classDelete);

module.exports = router;