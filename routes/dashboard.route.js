const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");

// middleware
const auth = require("../middleware/auth.middleware");
const validateClass = require("../middleware/validation/classes.validation");
const validateTask = require("../middleware/validation/tasks.validation");
const validateAssessment = require("../middleware/validation/assessments.validation");

// @route /dashboard/
// @desc render all today's classes, and the tasks and assessments due within 7 days
// @access PRIVATE
router.get("/", auth, controller.index);

// @route /dashboard/classes/edit/:classId
// @desc edit class instance
// @access PRIVATE
router.get("classes/edit/:classeId", auth, controller.classEdit);

// @route /dashboard/classes/update/:classId
// @desc update class instance
// @access PRIVATE
router.put("classes/update/:classId", auth, validateClass.update, controller.classUpdate);

// @route /dashboard/classes/delete/:classId
// @desc delete class instance
// @access PRIVATE
router.delete("/classes/delete/:classId", auth, validateClass.delete, controller.classDelete); 

// @route /dashboard/tasks/edit/:taskId
// @desc edit task instance
// @access PRIVATE
router.get("/tasks/edit/:taskId", auth, controller.taskEdit);

// @route /dashboard/tasks/new
// @desc get form to add new task through the dashboard
// @access PRIVATE
router.get("/tasks/new", auth, controller.taskNew);

// @route /dashboard/tasks/create
// @desc create new task
// @access PRIVATE
router.post("/tasks/create", auth, validateTask.create, controller.taskCreate);

// @route /dashboard/tasks/create
// @desc update task instances
// @access PRIVATE
router.put("/tasks/update/:taskId", auth, validateTask.update, controller.taskUpdate);

// @route /dashboard/tasks/delete/:taskId
// @desc delete task instance
// @access PRIVATE
router.delete("/tasks/delete/:taskId", auth, validateTask.delete, controller.taskDelete);

// @route /dashboard/assessments/edit/:assessmentId
// @desc edit assessment instance
// @access PRIVATE
router.get("/assessments/edit/:assessmentId", auth, controller.assessmentEdit);

// @route /dashboard/tasks/update/:assessmentId
// @desc update assessment 
// @access PRIVATE
router.put("/assessments/update/:assessmentId", auth, validateAssessment.update, controller.assessmentUpdate);

// @route /dashboard/assessments/delete/:assessmentId
// @desc delete assessment instance
// @access PRIVATE
router.delete("/assessments/delete/:assessmentId", auth, validateAssessment.delete, controller.assessmentDelete);

module.exports = router;

