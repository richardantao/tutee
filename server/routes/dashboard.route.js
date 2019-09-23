const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");

router.get("/", controller.index);

router.get("classes/:classId/edit", controller.classEdit); // routed in react

router.delete("/classes/:classId/delete", controller.classDelete); 

router.get("/tasks/:taskId/edit", controller.taskEdit); // routed in react

router.get("/tasks/create", controller.taskCreateGet); // routed in react

router.post("/tasks/create", controller.taskCreatePost); // routed in react

router.put("/tasks/:taskId/update", controller.taskUpdate);

router.delete("/tasks/:taskId/delete", controller.taskDelete);

router.get("/evals/:evalId/edit", controller.evalEdit); // routed in react

router.put("/evals/:evalId/update", controller.evalUpdate);

router.delete("/evals/:evalId/delete", controller.evalDelete);

module.exports = router;

