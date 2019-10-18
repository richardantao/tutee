const router = require("express").Router();
const controller = require("../controllers/calendar.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, controller.index);

router.get("/month", auth, controller.month);

router.get("/week", auth, controller.week);

router.get("/day", auth, controller.day);

router.get("/agenda", auth, controller.agenda);

router.get("/classes/new", auth, controller.classNew);

router.post("/classes/create", auth, controller.classCreate);

router.put("/classes/:classes._id/update", auth, controller.classUpdate);

router.delete("/classes/:classes._id/delete", auth, controller.classDelete);

module.exports = router;