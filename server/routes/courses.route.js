const router = require("express").Router();
const controller = require("../controllers/courses.controller");

router.get("/", controller.index);

// years
router.get("/years/:years._id/edit", controller.yearsEdit);

router.get("/years/new", controller.yearsNew);

router.post("/years/create", controller.yearsCreate);

router.put("/years/:years._id/update", controller.yearsUpdate);

router.delete("/year/:years._id/delete", controller.yearsDelete);

// terms
router.get("/terms/:terms._id/edit", controller.termsEdit);

router.get("/terms/new", controller.termsNew);

router.post("/terms/create", controller.termsCreate);

router.put("/terms/:terms._id/update", controller.termsUpdate);

router.delete("/terms/:terms._id/delete", controller.termsDelete);

// courses
router.get("/:courses._id/edit", controller.coursesEdit);

router.get("/new", controller.coursesNew);

router.post("/create", controller.coursesCreate);

router.put("/:courses._id/update", controller.coursesUpdate);

router.delete("/:courses._id/delete", controller.coursesDelete);

// modules
router.get("/modules/:modules._id/edit", controller.modulesEdit);

router.get("/modules/new", controller.modulesNew);

router.post("/modules/create", controller.modulesCreate);

router.put("/modules/:modules._id/update", controller.modulesUpdate);

router.delete("/modules/:modules._id/delete", controller.modulesDelete);

module.exports = router; 