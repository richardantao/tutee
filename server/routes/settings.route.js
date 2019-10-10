const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.controller");

router.post("/profile/create", controller.profileCreate);

router.put("/:_id/profile/update", controller.profileUpdate);

router.delete("/:_id/profile/delete", controller.profileDelete); 

router.get("/:_id/password/edit", controller.passwordEdit);

router.put("/:_id/password/update", controller.passwordUpdate);

router.get("/:preferencesId/preferences/edit", controller.preferencesEdit);

router.put("/:preferencesId/preferences/update", controller.preferencesUpdate);

router.get("/:preferencesId/integrations/edit", controller.integrationsEdit);

router.get("/integrations/new", controller.integrationsNew);

router.post("/integrations/create", controller.integrationsCreate);

router.put("/:preferencesId/integrations/update", controller.integrationsUpdate);

router.delete("/:preferencesId/integrations/delete", controller.integrationsDelete);

module.exports = router;