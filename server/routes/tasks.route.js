const router = require("express").Router();
const controller = require("../controllers/tasks.controller");

router.get("/", controller.index);

router.get("/past", controller.past); // handle logic on frontend?

router.get("/:taskId/edit", controller.edit);

router.get("/new", controller.new); 

router.post("/create", controller.create);

router.put("/:taskId/update", controller.update);

router.delete("/:taskId/delete", controller.delete);

module.exports = router;