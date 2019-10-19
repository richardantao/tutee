const router = require("express").Router();
const controller = require("../controllers/settings.controller");

// middleware
const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validation/user.validation");

// @route /settings/profile/update
// @desc update user profile in the settings view
// @access PRIVATE
router.put("/profile/update", auth, validate.updateProfile, controller.profileUpdate);

// @route /settings/profile/delete
// @desc delete user account
// @access PRIVATE
router.delete("/profile/delete", auth, validate.deleteProfile, controller.profileDelete); 

// @route /settings/password/edit
// @desc get user's password to compare to their input
// @access PRIVATE
router.get("/password/edit", auth, controller.passwordEdit);

// @route /settings/password/update
// @desc update user's password
// @access PRIVATE
router.put("/password/update", auth, validate.updatePassword, controller.passwordUpdate);

// @route /settings/preferences/edit
// @desc get user's preferences
// @access PRIVATE
router.get("/preferences/edit", auth, controller.preferencesEdit);

// @route /settings/preferences/update
// @desc update user's preferences
// @access PRIVATE
router.put("/preferences/update", auth, validate.updatePreferences, controller.preferencesUpdate);

// @route /settings/integrations/edit/:integrationId
// @desc edit user's integration instance
// @access PRIVATE
router.get("/integrations/edit", auth, controller.integrationsEdit);

// @route /settings/integrations/new
// @desc get form to add new integration
// @access PRIVATE
router.get("/integrations/new", auth, controller.integrationsNew);

// @route /settings/integration/create
// @desc add new user integration
// @access PRIVATE
router.post("/integrations/create", auth, validate.createIntegration, controller.integrationsCreate);

// @route /settings/integrations/update/:integrationId
// @desc update user's integration instance
// @access PRIVATE
router.put("/integrations/update/:integrationId", auth, validate.updateIntegration, controller.integrationsUpdate);

// @route /settings/integrations/delete/:integrationId
// @desc delete user's integration
// @access PRIVATE
router.delete("/integrations/delete/:integrationId", auth, validate.deleteIntegration, controller.integrationsDelete);

module.exports = router;