const router = require("express").Router();
const controller = require("../controllers/evaluations.controller");

router.get("/past", controller.past);

router.get("/:EvalId/edit", controller.edit);

router.get("/create", controller.createGet)

router.post("/create", controller.createPost);

router.put("/:EvalId/update", controller.update);

router.delete("/:EvalId/delete", controller.delete);

module.exports = router;