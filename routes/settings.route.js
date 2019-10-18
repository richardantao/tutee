const router = require("express").Router();
const controller = require("../controllers/settings.controller");
const auth = require("../middleware/auth.middleware");

router.put("/profile/update", auth, controller.profileUpdate);

// @route /settings/profile/delete
// @desc delete user account
// @access PRIVATE
router.delete("/profile/delete", auth, controller.profileDelete); 

// @route /settings/password/edit
// @desc get user's password to compare to their input
// @access PRIVATE
router.get("/password/edit", auth, controller.passwordEdit);

// @route /settings/password/update
// @desc update user's password
// @access PRIVATE
router.put("/password/update", auth, controller.passwordUpdate);

// @route /settings/preferences/edit
// @desc get user's preferences
// @access PRIVATE
router.get("/preferences/edit", auth, controller.preferencesEdit);

// @route /settings/preferences/update
// @desc update user's preferences
// @access PRIVATE
router.put("/preferences/update", auth, controller.preferencesUpdate);

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
router.post("/integrations/create", auth, controller.integrationsCreate);

// @route /settings/integrations/update/:integrationId
// @desc update user's integration instance
// @access PRIVATE
router.put("/integrations/update/:integrationId", auth, controller.integrationsUpdate);

// @route /settings/integrations/delete/:integrationId
// @desc delete user's integration
// @access PRIVATE
router.delete("/integrations/delete/:integrationId", auth, controller.integrationsDelete);

module.exports = router;