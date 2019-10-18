const router = require("express").Router();
const controller = require("../controllers/courses.controller");
const auth = require("../middleware/auth.middleware");

// @route /courses/
// @desc render all models within the courses view
// @access PRIVATE
router.get("/", controller.index);

/* Years */

// @route /courses/years/edit/:yearId
// @desc edit year instance
// @access PRIVATE
router.get("/years/edit/:yearId", auth, controller.yearsEdit);

// @route /courses/years/new
// @desc get form to add new year
// @access PRIVATE
router.get("/years/new", auth, controller.yearsNew);

// @route /courses/years/create
// @desc create new year
// @access PRIVATE
router.post("/years/create", auth, controller.yearsCreate);

// @route /courses/years/update/:yearId
// @desc update year instance
// @access PRIVATE
router.put("/years/update/:yearId", auth, controller.yearsUpdate);

// @route /courses/years/delete/:yearId
// @desc delete year instance
// @access PRIVATE
router.delete("/years/delete/:yearId", auth, controller.yearsDelete);

/* Terms */

// @route /courses/terms/edit/:termId
// @desc edit term instance
// @access PRIVATE
router.get("/terms/edit/:termId", auth, controller.termsEdit);

// @route /courses/terms/new
// @desc get form to add new term
// @access PRIVATE
router.get("/terms/new", auth, controller.termsNew);

// @route /courses/terms/create
// @desc create new term
// @access PRIVATE
router.post("/terms/create", auth, controller.termsCreate);

// @route /courses/terms/update/:termId
// @desc update term instance
// @access PRIVATE
router.put("/terms/update/:termId", auth, controller.termsUpdate);

// @route /courses/terms/delete/:termId
// @desc edit year instance
// @access PRIVATE
router.delete("/terms/delete/:termId", auth, controller.termsDelete);

// courses

// @route /courses/edit/:courseId
// @desc edit course instace
// @access PRIVATE
router.get("/edit/:courseId", auth, controller.coursesEdit);

// @route /courses/years/edit/:courseId
// @desc get form to add new course
// @access PRIVATE
router.get("/new", auth, controller.coursesNew);

// @route /courses/create
// @desc create new course
// @access PRIVATE
router.post("/create", auth, controller.coursesCreate);

// @route /courses/update/:courseId
// @desc update course instance
// @access PRIVATE
router.put("/update/:courseId", auth, controller.coursesUpdate);

// @route /courses/delete/:courseId
// @desc delete course instance
// @access PRIVATE
router.delete("/delete/:courseId", auth, controller.coursesDelete);

// modules

// @route /courses/modules/edit/:moduleId
// @desc edit module instance
// @access PRIVATE
router.get("/modules/edit/:moduleId", auth, controller.modulesEdit);

// @route /courses/modules/new
// @desc get form to add new module
// @access PRIVATE
router.get("/modules/new", auth, controller.modulesNew);

// @route /courses/modules/create
// @desc create new module
// @access PRIVATE
router.post("/modules/create", auth, controller.modulesCreate);

// @route /courses/modules/update/:moduleId
// @desc update module instance
// @access PRIVATE
router.put("/modules/update/:moduleId", auth, controller.modulesUpdate);

// @route /courses/modules/delete/:moduleId
// @desc delete module instance
// @access PRIVATE
router.delete("/modules/delete/:moduleId", auth, controller.modulesDelete);

module.exports = router; 