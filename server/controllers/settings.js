const Preferences = require("../models/Preferences")
const { check, validationResult, filter } = require("express-validator");

exports.index = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Preferences.findAll({

		})
		.then(preferences => {
			return res.status(204).json(preferences);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.profileCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Preferences.find({
			where: { id: req.params.id }
		})
		.then(preference => {
			return res.status(204).json(preference)
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// POST request to create initial profile settings | redundant?
exports.profileCreatePost = function(req, res) {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("firstName").not().isEmpty().trim().escape(); // validate alphanumeric and . - 
	check("lastName").not().isEmpty().trim().escape(); // validate alphanumeric and . - 
	check("email").isEmail(), // validate as an email entry
	check("country"); // whitelist alphanumeric and - 
	check("region"); // whitelist alphanumeric and - 
	check("institution"); // whitelist alphanumeric and -

	if (!errors.isEmpty()) {
		// return error message and reload page
		return res.status(400).json({ errors: errors.array() });
  	} else {
		Preferences.create({

		})
		.then(preference => {
			return res.status(201).json(preference);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});	
	}
};


// PUT request to update existing profile settings 
exports.profileUpdate = function(req, res) {
	const errors = validationResult(req);

	check("firstName").trim().escape(); // validate alphanumeric and . - 
	check("lastName").trim().escape(); // validate alphanumeric and . - 
	check("email").isEmail(); // validate as an email entry
	check("country"); // whitelist alphanumeric and - 
	check("region"); // whitelist alphanumeric and - 
	check("institution"); // whitelist alphanumeric and - 
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Preferences.find({
			where: { id: req.params.id }
		})
		.then(Preferences => {
			return Preferences.updatedAttribute({

			})
		})
		.then(updatedPreference => {
			return res.status(204).json(updatedPreference);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

// DELETE request to delete user's account
exports.profileDelete = function(req, res) {
	const errors = validationResult(req);
	
	if (errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		return res.status(204).json;
	}
};

// GET request to retrieve user's password in settings page
exports.passwordEdit = function(req, res) {
	const errors = validationResult(req);
	
	if(errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Preferences.destroy({
			where: { id: req.params.id }
		})
		.then(deletedPrference => {
			return res.status(204).json(deletedPrference);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

exports.passwordCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()){
		return res.status(404).json({ errors: errors.array() });
	} else {
		Preferences.find({
			where: { id: req.params.id }
		})
		.then(retrievedPassword => {
			return res.status(204).json(retrievedPassword);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// POST request to create user's password | redundant
exports.passwordCreatePost = function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Preferences.create({

		})
		.then(createdPassword => {
			return res.status(201).json(createdPassword);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

// PUT request to update database with user's new password
exports.passwordUpdate = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Preferences.find({
			where: { id: req.params.id }
		})
		.then(Preferences => {
			return Preferences.updatedAttribute({

			})
		})
		.then(updatedPassword => {
			return res.status(204).json(updatedPassword);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		})
	}
};


// GET request to retrieve user's preferences 
exports.preferencesEdit = function(req, res) {
	const errors = validationResult(req);
	
	if(!errors.isEmpty()) {
	   return res.status(404).json({ errors: errors.array() });
	} else {
	   Preferences.find({
		where: { id: req.params.id }
	   })
	   .then(preference => {
		return res.status(204).json(preference);
	   })
	   .catch(() => {
		return res.status(500).json({ errors: errors.array() });
	   });
	}
};

exports.preferencesCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Preferences.find({
			where: { if: req.params.id }
		})
		.then(retrievedPreferences => {
			return res.status(204).json(retrievedPreferences);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// POST request to create user's preferences | redundant? maybe not
exports.preferencesCreatePost = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Preferences.create({

		})
		.then(createdPreference => {
		return res.status(201).json(createdPreference);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		})
	}
};


// POST request to update user's personal app preferences
exports.preferencesUpdate = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Preferences.find({
			where: { id: req.params.id }
		})
		.then(Preferences => {
			return Preferences.updatedAttribute({

			})
		})
		.then(updatedPreference => {
			return res.status(204).json(updatedPreference);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
		
	}
};

// DELETE request to delete (reset?) user's preferences to default settings 
exports.preferencesDelete = function(req, res) {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });	
	} else {
		Preferences.destroy({
			where: { id: req.params.id }
		})
		.then(deletedPreference => {
			return res.status(204).json(deletedPreference);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

/* Future routes */

// GET request to retrieve user's third party integrations
exports.integrationsEdit = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.statu(404).json({ errors: errors.array() });
	} else {
		return res.status(200).json();
	}
};

exports.integrationsCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {

	}
}

// POST request to create third party integration connections
exports.integrationsCreatePost = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// Seqeulize INSERT query using create() to insert new record into database
		
		// return status code and updated object as JSON in the response
		return res.status(201).json();
	}
};

// PUT request to update user's third party integrations
exports.integrationsUpdate = function(req, res){
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// Sequelize UPDATE query using ___ to update selected rows in database
		
		// return status code and updated object as JSON in the response
		return res.status(204).json();
	}
};

// DELETE request to delete user's third party integrations
exports.integrationsDelete = function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		// Sequelize DELETE query using destroy() to delete selected data from database
		
		// return status code and updated object as JSON in the response
		return res.status(204);
	}
}









