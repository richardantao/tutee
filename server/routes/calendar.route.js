const express = require("express");
const router = express.Router();
const controller = require("../controllers/calendar.controller");

router.get("/month", controller.calendarMonth);

router.get("//week", controller.calendarWeek);

router.get("/day", controller.calendarDay);

router.get("//agenda", controller.calendarAgenda);

module.exports = router;