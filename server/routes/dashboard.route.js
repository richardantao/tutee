const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboard.controller");

// GET specific class selected by user
router.get("classes/:classId/edit", controller.dashboardClassEdit); // routed in react

// DELETE specific class selected by user
router.delete("/classes/:classId/delete", controller.dashboardClassDelete); 

// GET specific task selected by user
router.get("/tasks/:taskId/edit", controller.dashboardTaskEdit); // routed in react

// GET data for user to POST new tasks
router.get("/tasks/create", controller.dashboardTaskCreateGet); // routed in react

// POST new task created by user
router.post("/tasks/create", controller.dashboardTaskCreatePost); // routed in react

// PUT task selected by user
router.put("/tasks/:TaskId/update", controller.dashboardTaskUpdate);

// DELETE task selected by user
router.delete("/tasks/:TaskId/delete", controller.dashboardTaskDelete);

// GET specific eval selected by user
router.get("/evals/:EvalId/edit", controller.dashboardEvaluEdit); // routed in react

// PUT specific eval selected by user
router.put("/evals/:EvalId/update", controller.dashboardEvaluUpdate);

// DELETE specific eval selected by user
router.delete("/evals/:EvalId/delete", controller.dashboardEvaluDelete);

module.exports = router;

