const router = require("express").Router();
const controller = require("../controllers/courses.controller");

router.get("/", controller.index);

// years
router.get("/years/:YearId/edit", controller.yearsEdit);

router.get("/years/new", controller.yearsCreateGet);

router.post("/years/create", controller.yearsCreatePost);

router.put("/years/:YearId/update", controller.yearsUpdate);

router.delete("/year/:YearId/delete", controller.yearsDelete);

// terms
router.get("/terms/:TermId/edit", controller.termsEdit);

router.get("/terms/new", controller.termsCreateGet);

router.post("/terms/create", controller.termsCreatePost);

router.put("/terms/:TermId/update", controller.termsUpdate);

router.delete("/terms/:TermId/delete", controller.termsDelete);

// courses
router.get("/:CourseId/edit", controller.coursesEdit);

router.get("/new", controller.coursesCreateGet);

router.post("/create", controller.coursesCreatePost);

router.put("/:CourseId/update", controller.coursesUpdate);

router.delete("/:CourseId/delete", controller.coursesDelete);

// modules
router.get("/modules/:ModuleId/edit", controller.modulesEdit);

router.get("/modules/new", controller.modulesCreateGet);

router.post("/modules/create", controller.modulesCreatePost);

router.put("/modules/:ModuleId/update", controller.modulesUpdate);

router.delete("/modules/:ModuleId/delete", controller.modulesDelete);

module.exports = router; 