const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");

router.get("/", controller.index);

router.get("classes/:classes._id/edit", controller.classEdit);

router.put("classes/:classes._id/update", controller.classUpdate);

router.delete("/classes/:classes._id/delete", controller.classDelete); 

router.get("/tasks/:tasks._id/edit", controller.taskEdit);

router.get("/tasks/new", controller.taskNew);

router.post("/tasks/create", controller.taskCreate);

router.put("/tasks/:tasks._id/update", controller.taskUpdate);

router.delete("/tasks/:tasks._id/delete", controller.taskDelete);

router.get("/evals/:evaluations._id/edit", controller.evalEdit);

router.put("/evals/:evaluations._id/update", controller.evalUpdate);

router.delete("/evals/:evaluations._id/delete", controller.evalDelete);

module.exports = router;

