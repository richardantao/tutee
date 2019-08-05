const express = require("express");
const router = express.Router();
const controller = require("../controllers/evaluations");

// handle route on frontend? maybe
router.get("/past", controller.evalsPast);

// GET request for specific evaluation
router.get("/:evalId/edit", controller.evalsEdit);

// GET user's data for the POST request
router.get("/:userId/create", controller.evalsCreateGet)

// POST request for creating a new evaluation
router.post("/create", controller.evalsCreatePost);

// PUT request for updating an existing evaluation
router.put("/:evalId/update", controller.evalsUpdate);

// DELETE request for deleting an existing evaluation
router.delete("/:evalId/delete", controller.evalsDelete);
module.exports = router;