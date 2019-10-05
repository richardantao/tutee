const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.controller");

router.get("/profile/new", controller.profileCreateGet);

router.post("/profile/create", controller.profileCreatePost);

router.put("/:user_Id/profile/update", controller.profileUpdate);

router.delete("/:userId/profile/delete", controller.profileDelete); 

router.get("/:userId/password/edit", controller.passwordEdit);

router.put("/:userId/password/update", controller.passwordUpdate);

router.get("/:preferencesId/preferences/edit", controller.preferencesEdit);

router.put("/:preferencesId/preferences/update", controller.preferencesUpdate);

router.get("/:preferencesId/integrations/edit", controller.integrationsEdit);

router.get("/integrations/new", controller.integrationsCreateGet);

router.post("/integrations/create", controller.integrationsCreatePost);

router.put("/:preferencesId/integrations/update", controller.integrationsUpdate);

router.delete("/:preferencesId/integrations/delete", controller.integrationsDelete);

module.exports = router;