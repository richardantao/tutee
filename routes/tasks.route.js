const router = require("express").Router();
const controller = require("../controllers/tasks.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, controller.index);

router.get("/past", auth, controller.past); // handle logic on frontend?

router.get("/:tasks._id/edit", auth, controller.edit);

router.get("/new", auth, controller.new); 

router.post("/create", auth, controller.create);

router.put("/:tasks._id/update", auth, controller.update);

router.delete("/:tasks._id/delete", auth, controller.delete);

module.exports = router;