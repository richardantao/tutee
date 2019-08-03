const express = require("express");
const router = express.Router();
const controller = require("../controllers/courses");

// GET request for the Courses page with all existing records
router.get("/", controller.index);

// GET request to retrieve specific year
router.get("/:yearId/edit", controller.yearsEdit);

// GET request to provide data for a POST
router.get("/:userId/create", controller.yearsCreateGet);

// POST request to create new Year 
router.post("/create", controller.yearsCreatePost);

// PUT request to update current Year
router.put("/:yearId/update", controller.yearsUpdate);

// DELETE request to delete current Year
router.delete("/:yearId/delete", controller.yearsDelete);

// GET request to retrieve specific term
router.get("/:termId/edit", controller.termsEdit);

// GET request to supply data for Terms POST
router.get("/:userId/create", controller.termsCreateGet);

// POST request to create new Term
router.post("/create", controller.termsCreatePost);

// PUT request to update current Term
router.put("/:termId/update", controller.termsUpdate);

// DELETE request to delete current Term
router.delete("/:termId/delete", controller.termsDelete);

// GET request to retrieve specific course
router.get("/:courseId/edit", controller.coursesEdit);

// GET request to supply data for Course POST
router.get("/:userId/create", controller.coursesCreateGet);

// POST request to create new Course
router.post("/create", controller.coursesCreatePost);

// PUT request to update current Course
router.put("/:courseId/update", controller.coursesUpdate);

// DELETE request to delete current Course
router.delete("/:courseId/delete", controller.coursesDelete);

// GET request to retrieve specific module
router.get("/:moduleId/edit", controller.modulesEdit);

// GET request to supply data for Module POST
router.get("/:userId/create", controller.modulesCreateGet);

// POST request to create new Module
router.post("/create", controller.modulesCreate);

// PUT request to update current Module
router.put("/:moduleId/update", controller.modulesUpdate);

// DELETE request to delete current Module
router.delete("/:moduleId/delete", controller.modulesDelete);

module.exports = router; 