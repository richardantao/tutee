const express = require("express");
const router = express.Router();
const controller = require("../controllers/evaluations.controller");

// handle route on frontend? maybe
router.get("/past", controller.evalusPast);

// GET request for specific evaluation
router.get("/:EvalId/edit", controller.evalusEdit);

// GET user's data for the POST request
router.get("/create", controller.evalusCreateGet)

// POST request for creating a new evaluation
router.post("/create", controller.evalusCreatePost);

// PUT request for updating an existing evaluation
router.put("/:EvalId/update", controller.evalusUpdate);

// DELETE request for deleting an existing evaluation
router.delete("/:EvalId/delete", controller.evalusDelete);

module.exports = router;