const router = require("express").Router();
const controller = require("../controllers/calendar.controller");

router.get("/", controller.index);

router.get("/month", controller.month);

router.get("/week", controller.week);

router.get("/day", controller.day);

router.get("/agenda", controller.agenda);

router.get("/classes/new", controller.classNew);

router.post("/classes/create", controller.classCreate);

router.put("/classes/:classes._id/update", controller.classUpdate);

router.delete("/classes/:classes._id/delete", controller.classDelete);

module.exports = router;