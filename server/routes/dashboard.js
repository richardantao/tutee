const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboard");

// GET specific class selected by user
router.get("/:userId/classes/:sessionId/edit", controller.dashboardSessionEdit); // routed in react

// DELETE specific class selected by user
router.delete("/:userId/classes/:sessionId/delete", controller.dashboardSessionDelete); 

// GET specific task selected by user
router.get("/:userId/tasks/:taskId/edit", controller.dashboardTaskEdit); // routed in react

// GET data for user to POST new task
router.get("/:userId/tasks/create", controller.dashboardTaskCreateGet); // routed in react

// POST new task created by user
router.post("/:userId/tasks/create", controller.dashboardTaskCreatePost); // routed in react

// PUT task selected by user
router.put("/:userId/tasks/:taskId/update", controller.dashboardTaskUpdate);

// DELETE task selected by user
router.delete("/:userId/tasks/:taskId/delete", controller.dashboardTaskDelete);

// GET specific eval selected by user
router.get("/:userId/evals/:evalId/edit", controller.dashboardEvalEdit);

// PUT specific eval selected by user
router.put("/:userId/evals/:evalId/update", controller.dashboardEvalUpdate);

// DELETE specific eval selected by user
router.delete("/:userId/evals/:evalId/delete", controller.dashboardEvalDelete);

module.exports = router;

