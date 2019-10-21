const router = require("express").Router();
const controller = require("../controllers/evaluations.controller");

router.get("/", controller.index);

router.get("/past", controller.past);

router.get("/:evaluations._id/edit", controller.edit);

router.get("/new", controller.new);

router.post("/create", controller.create);

router.put("/:evaluations._id/update", controller.update);

router.delete("/:evaluations._id/delete", controller.delete);

module.exports = router;