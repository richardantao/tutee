const router = require("express").Router();
const controller = require("../controllers/evaluations.controller");

router.get("/", controller.index);

router.get("/past", controller.past);

router.get("/:EvalId/edit", controller.edit);

router.get("/new", controller.new);

router.post("/create", controller.create);

router.put("/:EvalId/update", controller.update);

router.delete("/:EvalId/delete", controller.delete);

module.exports = router;