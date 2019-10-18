const router = require("express").Router();
const controller = require("../controllers/users.controller");

router.get("/", controller.index);

router.get("/edit", controller.edit);

router.post("/create", controller.create);

router.put("/update", controller.update);

router.delete("/delete", controller.delete);

module.exports = router;