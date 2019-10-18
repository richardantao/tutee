const router = require("express").Router();
const controller = require("../controllers/evaluations.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, controller.index);

router.get("/past", auth, controller.past);

router.get("/:evaluations._id/edit", auth, controller.edit);

router.get("/new", auth, controller.new);

router.post("/create", auth, controller.create);

router.put("/:evaluations._id/update", auth, controller.update);

router.delete("/:evaluations._id/delete", auth, controller.delete);

module.exports = router;