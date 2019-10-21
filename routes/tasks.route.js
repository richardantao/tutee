const router = require("express").Router();
const controller = require("../controllers/tasks.controller");

router.get("/", controller.index);

router.get("/past", controller.past); // handle logic on frontend?

router.get("/:tasks._id/edit", controller.edit);

router.get("/new", controller.new); 

router.post("/create", controller.create);

router.put("/:tasks._id/update", controller.update);

router.delete("/:tasks._id/delete", controller.delete);

module.exports = router;