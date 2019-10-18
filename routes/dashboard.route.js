const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");

// middleware
const auth = require("../middleware/auth.middleware");
const validateClass = require("../middleware/validation/classes.validation");
const validateTask = require("../middleware/validation/tasks.validation");
const validateEvaluation = require("../middleware/validation/evaluations.validation");


// @route /dashboard/
// @desc render all today's classes, and the tasks and evaluations due within 7 days
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

// @route /dashboard/evaluations/edit/:evaluationId
// @desc edit evaluation instance
// @access PRIVATE
router.get("/evaluations/edit/:evaluationId", auth, controller.evalEdit);

// @route /dashboard/tasks/update/:evaluationId
// @desc update evaluation 
// @access PRIVATE
router.put("/evaluations/update/:evaluationId", auth, validateEvaluation.update, controller.evalUpdate);

// @route /dashboard/evalations/delete/:evaluationId
// @desc delete evaluation instance
// @access PRIVATE
router.delete("/evaluations/delete/:evaluationId", auth, validateEvaluation.delete, controller.evalDelete);

module.exports = router;

