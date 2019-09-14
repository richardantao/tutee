const router = require("express").Router();
const controller = require("../controllers/tasks.controller");

router.get("/", controller.index);

router.get("/past", controller.tasksPast); // handle logic on frontend?

router.get("/:taskId/edit", controller.edit);

router.get("/create", controller.createGet); 

router.post("/create", controller.createPost);

router.put("/:taskId/update", controller.update);

router.delete("/:taskId/delete", controller.delete);

module.exports = router;