const express = require("express");
const router = express.Router();
const controller = require("../controllers/evaluations");

// handle route on frontend? maybe
router.get("/past", controller.evalusPast);

// GET request for specific evaluation
router.get("/:evalId/edit", controller.evalusEdit);

// GET user's data for the POST request
router.get("/:userId/create", controller.evalusCreateGet)

// POST request for creating a new evaluation
router.post("/create", controller.evalusCreatePost);

// PUT request for updating an existing evaluation
router.put("/:evalId/update", controller.evalusUpdate);

// DELETE request for deleting an existing evaluation
router.delete("/:evalId/delete", controller.evalusDelete);
module.exports = router;