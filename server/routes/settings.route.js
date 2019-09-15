const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.controller");

router.get("/profile/create", controller.profileCreateGet);

router.post("/profile/create", controller.profileCreatePost);

// PUT request to update user's profile settings
router.put("/:user_Id/profile/update", controller.profileUpdate);

// DELETE request to delete user's profile
router.delete("/:userId/profile/delete", controller.profileDelete); 

// GET request to retrieve user's password information
router.get("/:userId/password/edit", controller.passwordEdit);

// PUT request for updating user's password
router.put("/:userId/password/update", controller.passwordUpdate);

// GET request for user's preferences information
router.get("/:preferencesId/preferences/edit", controller.preferencesEdit);

// PUT request to update user's preferences 
router.put("/:preferencesId/preferences/update", controller.preferencesUpdate);

// GET request to display user's linked account information 
router.get("/:preferencesId/integrations/edit", controller.integrationsEdit);

router.get("/integrations/create", controller.integrationsCreateGet);

// POST request to create connection to third party connections ie.(Google, Facebook, etc.)
router.post("/integrations/create", controller.integrationsCreatePost);

// PUT request to update user's third party integrations
router.put("/:preferencesId/integrations/update", controller.integrationsUpdate);

// DELETE request to disconnect a third-party integration
router.delete("/:preferencesId/integrations/delete", controller.integrationsDelete);

module.exports = router;