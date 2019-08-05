const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboard");

// GET specific class selected by user
router.get("/classes/:classId/edit", controller.dashboardClassEdit);

// DELETE specific class selected by user
router.delete("/classes/:classId/delete", controller.dashboardClassDelete);

// GET specific task selected by user
router.get("/tasks/:taskId/edit", controller.dashboardTaskEdit);

// GET data for user to POST new task
router.get("/tasks/create", controller.dashboardTaskCreateGet);

// POST new task created by user
router.post("/tasks/create", controller.dashboardTaskCreatePost);

// PUT task selected by user
router.put("/tasks/:taskId/update", controller.dashboardTaskUpdate);

// DELETE task selected by user
router.delete("/tasks/:taskId/delete", controller.dashboardTaskDelete);

// GET specific eval selected by user
router.get("/evals/:evalId/edit", controller.dashboardEvalEdit);

// PUT specific eval selected by user
router.put("/evals/:evalId/update", controller.dashboardEvalUpdate);

// DELETE specific eval selected by user
router.delete("/evals/:evalId/delete", controller.dashboardEvalDelete);

module.exports = router;

