const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");

// GET specific class selected by user
router.get("classes/:classId/edit", controller.classEdit); // routed in react

// DELETE specific class selected by user
router.delete("/classes/:classId/delete", controller.classDelete); 

// GET specific task selected by user
router.get("/tasks/:taskId/edit", controller.taskEdit); // routed in react

// GET data for user to POST new tasks
router.get("/tasks/create", controller.taskCreateGet); // routed in react

// POST new task created by user
router.post("/tasks/create", controller.taskCreatePost); // routed in react

// PUT task selected by user
router.put("/tasks/:TaskId/update", controller.taskUpdate);

// DELETE task selected by user
router.delete("/tasks/:TaskId/delete", controller.taskDelete);

// GET specific eval selected by user
router.get("/evals/:EvalId/edit", controller.evalEdit); // routed in react

// PUT specific eval selected by user
router.put("/evals/:EvalId/update", controller.evalUpdate);

// DELETE specific eval selected by user
router.delete("/evals/:EvalId/delete", controller.evalDelete);

module.exports = router;

