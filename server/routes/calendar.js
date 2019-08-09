const express = require("express");
const router = express.Router();
const controller = require("../controllers/calendar");

router.get("/:userID/month", controller.calendarMonth);

router.get("/:userId/week", controller.calendarWeek);

router.get("/:userId/day", controller.calendarDay);

router.get("/:userId/agenda", controller.calendarAgenda);

module.exports = router;