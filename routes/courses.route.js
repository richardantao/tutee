const router = require("express").Router();
const controller = require("../controllers/courses.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", controller.index);

// years
router.get("/years/:years._id/edit", auth, controller.yearsEdit);

router.get("/years/new", auth, controller.yearsNew);

router.post("/years/create", auth, controller.yearsCreate);

router.put("/years/:years._id/update", auth, controller.yearsUpdate);

router.delete("/year/:years._id/delete", auth, controller.yearsDelete);

// terms
router.get("/terms/:terms._id/edit", auth, controller.termsEdit);

router.get("/terms/new", auth, controller.termsNew);

router.post("/terms/create", auth, controller.termsCreate);

router.put("/terms/:terms._id/update", auth, controller.termsUpdate);

router.delete("/terms/:terms._id/delete", auth, controller.termsDelete);

// courses
router.get("/:courses._id/edit", auth, controller.coursesEdit);

router.get("/new", auth, controller.coursesNew);

router.post("/create", auth, controller.coursesCreate);

router.put("/:courses._id/update", auth, controller.coursesUpdate);

router.delete("/:courses._id/delete", auth, controller.coursesDelete);

// modules
router.get("/modules/:modules._id/edit", auth, controller.modulesEdit);

router.get("/modules/new", auth, controller.modulesNew);

router.post("/modules/create", auth, controller.modulesCreate);

router.put("/modules/:modules._id/update", auth, controller.modulesUpdate);

router.delete("/modules/:modules._id/delete", auth, controller.modulesDelete);

module.exports = router; 