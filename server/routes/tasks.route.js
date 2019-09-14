const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks.controller");

router.get("/past", controller.tasksPast); // handle logic on frontend?

// GET request for Tasks editer form
router.get("/:taskId/edit", controller.tasksEdit);

// GET request to load form options 
router.get("/create", controller.tasksCreateGet); 

// POST request for creating a new task
router.post("/create", controller.tasksCreatePost);

// PUT user's update to database
router.put("/:taskId/update", controller.tasksUpdate);

// POST request for deleting an existent task
router.delete("/:taskId/delete", controller.tasksDelete);

module.exports = router;