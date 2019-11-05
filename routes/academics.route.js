const router = require("express").Router();
const controller = require("../controllers/academics.controller");

// middleware
const auth = require("../middleware/auth.middleware");
const validateYear = require("../middleware/validation/years.validation");
const validateTerm = require("../middleware/validation/terms.validation");
const validateCourse = require("../middleware/validation/academics.validation");
const validateModule = require("../middleware/validation/modules.validation");

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
router.post("/years/create", auth, validateYear.create, controller.yearsCreate);

// @route /courses/years/update/:yearId
// @desc update year instance
// @access PRIVATE
router.put("/years/update/:yearId", auth, validateYear.update, controller.yearsUpdate);

// @route /courses/years/delete/:yearId
// @desc delete year instance
// @access PRIVATE
router.delete("/years/delete/:yearId", auth, validateYear.delete, controller.yearsDelete);

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
router.post("/terms/create", auth, validateTerm.create, controller.termsCreate);

// @route /courses/terms/update/:termId
// @desc update term instance
// @access PRIVATE
router.put("/terms/update/:termId", auth, validateTerm.update, controller.termsUpdate);

// @route /courses/terms/delete/:termId
// @desc edit year instance
// @access PRIVATE
router.delete("/terms/delete/:termId", auth, validateTerm.delete, controller.termsDelete);

// courses

// @route /courses/edit/:courseId
// @desc edit course instace
// @access PRIVATE
router.get("/courses/edit/:courseId", auth, controller.coursesEdit);

// @route /courses/years/edit/:courseId
// @desc get form to add new course
// @access PRIVATE
router.get("/courses/new", auth, controller.coursesNew);

// @route /courses/create
// @desc create new course
// @access PRIVATE
router.post("/courses/create", auth, validateCourse.create, controller.coursesCreate);

// @route /courses/update/:courseId
// @desc update course instance
// @access PRIVATE
router.put("/courses/update/:courseId", auth, validateCourse.update, controller.coursesUpdate);

// @route /courses/delete/:courseId
// @desc delete course instance
// @access PRIVATE
router.delete("/courses/delete/:courseId", auth, validateCourse.delete, controller.coursesDelete);

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
router.post("/modules/create", auth, validateModule.create, controller.modulesCreate);

// @route /courses/modules/update/:moduleId
// @desc update module instance
// @access PRIVATE
router.put("/modules/update/:moduleId", auth, validateModule.update, controller.modulesUpdate);

// @route /courses/modules/delete/:moduleId
// @desc delete module instance
// @access PRIVATE
router.delete("/modules/delete/:moduleId", auth, validateModule.delete, controller.modulesDelete);

module.exports = router; 