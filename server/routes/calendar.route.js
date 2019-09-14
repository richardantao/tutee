const router = require("express").Router();
const controller = require("../controllers/calendar.controller");

router.get("/month", controller.month);

router.get("/week", controller.week);

router.get("/day", controller.day);

router.get("/agenda", controller.agenda);

module.exports = router;