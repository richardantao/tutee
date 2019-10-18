const router = require("express").Router();
const controller = require("../controllers/settings.controller");
const auth = require("../middleware/auth.middleware");

router.post("/profile/create", auth, controller.profileCreate);

router.put("/profile/update", auth, controller.profileUpdate);

router.delete("/profile/delete", auth, controller.profileDelete); 

router.get("/password/edit", auth, controller.passwordEdit);

router.put("/password/update", auth, controller.passwordUpdate);

router.get("/preferences/edit", auth, controller.preferencesEdit);

router.put("/preferences/update", auth, controller.preferencesUpdate);

router.get("/integrations/edit", auth, controller.integrationsEdit);

router.get("/integrations/new", auth, controller.integrationsNew);

router.post("/integrations/create", auth, controller.integrationsCreate);

router.put("/integrations/update", auth, controller.integrationsUpdate);

router.delete("/integrations/delete", auth, controller.integrationsDelete);

module.exports = router;