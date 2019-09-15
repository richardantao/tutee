const router = require("express").Router();
const controller = require("../controllers/courses.controller");

// GET request to retrieve specific year
router.get("/:YearId/edit", controller.yearsEdit);

// GET request to provide data for a POST
router.get("/create", controller.yearsCreateGet);

// POST request to create new Year 
router.post("/create", controller.yearsCreatePost);

// PUT request to update current Year
router.put("/:YearId/update", controller.yearsUpdate);

// DELETE request to delete current Year
router.delete("/:YearId/delete", controller.yearsDelete);

// GET request to retrieve specific term
router.get("/:TermId/edit", controller.termsEdit);

// GET request to supply data for Terms POST
router.get("/create", controller.termsCreateGet);

// POST request to create new Term
router.post("/create", controller.termsCreatePost);

// PUT request to update current Term
router.put("/:TermId/update", controller.termsUpdate);

// DELETE request to delete current Term
router.delete("/:TermId/delete", controller.termsDelete);

// GET request to retrieve specific course
router.get("/:CourseId/edit", controller.coursesEdit);

// GET request to supply data for Course POST
router.get("/create", controller.coursesCreateGet);

// POST request to create new Course
router.post("/create", controller.coursesCreatePost);

// PUT request to update current Course
router.put("/:CourseId/update", controller.coursesUpdate);

// DELETE request to delete current Course
router.delete("/:CourseId/delete", controller.coursesDelete);

// GET request to retrieve specific module
router.get("/:ModuleId/edit", controller.modulesEdit);

// GET request to supply data for Module POST
router.get("/create", controller.modulesCreateGet);

// POST request to create new Module
router.post("/create", controller.modulesCreatePost);

// PUT request to update current Module
router.put("/:ModuleId/update", controller.modulesUpdate);

// DELETE request to delete current Module
router.delete("/:ModuleId/delete", controller.modulesDelete);

module.exports = router; 