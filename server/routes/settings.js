const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings");

// GET request for profile form (default settings page)
router.get("/:userId/profile/edit", controller.index);

router.post("/profile/create", controller.profileCreate);

// PUT request to update user's profile settings
router.put("/:user_Id/profile/update", controller.profileUpdate);

// DELETE request to delete user's profile
router.delete("/:userId/profile/delete", controller.profileDelete); 

// GET request to retrieve user's password information
router.get("/:userId/password/edit", controller.passwordEdit);

// POST request for user's password creation
router.post("/password/create", controller.passwordCreate);

// PUT request for updating user's password
router.put("/:userId/password/update", controller.passwordUpdate);

// GET request for user's preferences information
router.get("/:preferencesId/preferences/edit", controller.preferencesEdit);

// POST request for creating user's preferences
router.post("/preferences/create", controller.preferencesCreate);

// PUT request to update user's preferences 
router.put("/:preferencesId/preferences/update", controller.preferencesUpdate);

// DELETE request to reset user's preferences to the default settings
router.delete("/:preferencesId/preferences/delete", controller.preferencesDelete);

// GET request to display user's linked account information 
router.get("/:preferencesId/integrations/edit", controller.integrationsEdit);

// POST request to create connection to third party connections ie.(Google, Facebook, etc.)
router.post("/integrations/create", controller.integrationsCreate);

// PUT request to update user's third party integrations
router.put("/:preferencesId/integrations/update", controller.integrationsUpdate);

// DELETE request to disconnect a third-party integration
router.delete("/:preferencesId/integrations/delete", controller.integrationsDelete);


router.get("/", function(req, res) {
	let selectProfile = "SELECT FROM WHERE"
	let selectPassword = "SELECT FROM WHERE";
	let selectPreferences = "SELECT FROM WHERE";
	let selectLinked = " SELECT FROM WHERE";
	
	connection.query(selectProfile + selectPassword + selectPreferences + selectLinked, function(err, rows, fields) {
		if (err) {
			console.log("");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("");
			res.sendStatus(200);
			res.json(rows);
		}
		connection.end();
	});
});

router.post("/updateProfile", function(req, res) {
	let update = "UPDATE Users SET User_FirstName = " + req.body.firstNames + ", SET User_LastName = " + req.body.lastName + ", SET User_Email = " + req.body.email + ", SET User_Country = " + req.body.country + ", SET User_Region = " + req.body.region + ", SET User_Institution = " + req.body.institution + ", WHERE "; // finish WHERE condition tying in the users ID to the updated rows
	
	connection.query(update, data, function(err, result, fields) {
		if(err) {
			console.log("The application was not able to update the user's profile details");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("Rows affects: " + result.affectedRows);
			res.sendStatus(200);
		}
		connection.end();	
	});
});

router.post("/updatePassword", function(req, res) {
	let update = "UPDATE Users SET User_Password = " + req.body.password + ", WHERE "; // tie WHERE to User ID
	
	connection.query(update, data, function(err, result, fields) {
		if(err) {
			console.log("The application was not able to update the user's password");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("Rows affects: " + result.affectedRows);
			res.sendStatus(200);		
		}
		connection.end();
	});
});

router.post("/updatePreferences", function(req, res) {
	let update = "UPDATE Preferences SET ";
	
	connection.query(update, data, function(err, result, fields) {
		if(err) {
			console.log("The application was not able to update the user's profile preferences");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("Rows affects: " + results.affectedRows);
			res.sendStatus(200);
		}
		connection.end();
	});
});

// is this route necessary?
router.post("/updateLinked", function(req, res) {
	let update = "UPDATE ";
	
	connection.query(update, data, function(err, result, fields) {
		if(err) {
			console.log("The application was not able to update the user's linked accounts");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("Rows affects: " + result.affectedRows);
			res.sendStatus(200);
		}
		connection.end();
	});
});

module.exports = router;