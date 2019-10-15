const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.controller");

router.post("/profile/create", controller.profileCreate);

router.put("/profile/update", controller.profileUpdate);

router.delete("/profile/delete", controller.profileDelete); 

router.get("/password/edit", controller.passwordEdit);

router.put("/password/update", controller.passwordUpdate);

router.get("/preferences/edit", controller.preferencesEdit);

router.put("/preferences/update", controller.preferencesUpdate);

router.get("/integrations/edit", controller.integrationsEdit);

router.get("/integrations/new", controller.integrationsNew);

router.post("/integrations/create", controller.integrationsCreate);

router.put("/integrations/update", controller.integrationsUpdate);

router.delete("/integrations/delete", controller.integrationsDelete);

module.exports = router;