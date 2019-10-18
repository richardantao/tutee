const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, controller.index);

router.get("classes/:classes._id/edit", auth, controller.classEdit);

router.put("classes/:classes._id/update", auth, controller.classUpdate);

router.delete("/classes/:classes._id/delete", auth, controller.classDelete); 

router.get("/tasks/:tasks._id/edit", auth, controller.taskEdit);

router.get("/tasks/new", auth, controller.taskNew);

router.post("/tasks/create", auth, controller.taskCreate);

router.put("/tasks/:tasks._id/update", auth, controller.taskUpdate);

router.delete("/tasks/:tasks._id/delete", auth, controller.taskDelete);

router.get("/evals/:evaluations._id/edit", auth, controller.evalEdit);

router.put("/evals/:evaluations._id/update", auth, controller.evalUpdate);

router.delete("/evals/:evaluations._id/delete", auth, controller.evalDelete);

module.exports = router;

