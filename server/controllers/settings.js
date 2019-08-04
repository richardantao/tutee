const Preferences = require("../models/Preferences")
const { check, validationResult, filter } = require("express-validator");

// GET request to render settings page, with Profile as the default tab
exports.index = function(req, res) {
	const errors = validationResult(req);
	
	if(errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		return res.status(200).json;
	}
}

exports.profileCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {

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
		return res.status(422).json({ errors: errors.array() });
  	} else {
		// Sequelize INSERT using create(), profile info related to the user's ID
		
		// return status code and new object as JSON to the client to render
		return res.status(201).json();
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
		return res.status(422).json({ errors: errors.array() });
	} else {
		// Sequelize UPDATE where  
		
		// return status code and updated object as JSON in the response
		return res.status(204).json();
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
		return res.status(200).json;
	}
};

exports.passwordCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()){

	} else {

	}
}

// POST request to create user's password | redundant
exports.passwordCreatePost = function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		// 
		// return status code and updated object as JSON in the response
		return res.status(201).json();
	}
};

// PUT request to update database with user's new password
exports.passwordUpdate = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		// 
		
		// return status code and updated object as JSON in the response
		return res.status(204).json();
	}
};


// GET request to retrieve user's preferences 
exports.preferencesEdit = function(req, res) {
	const errors = validationResult(req);
	
	if(!errors.isEmpty()) {
	   return res.status(404).json({ errors: errors.array() });
	} else {
	   //

	   // return status code with 
	   return res.status(200).json();
	}
};

exports.preferencesCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {

	}
}

// POST request to create user's preferences | redundant? maybe not
exports.preferencesCreatePost = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		// 
		
		// return status code and updated object as JSON in the response
		return res.status(201).json();
	}
};


// POST request to update user's personal app preferences
exports.preferencesUpdate = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		// return status code and updated object as JSON in the response
		return res.status(204).json();
	}
};

// DELETE request to delete (reset?) user's preferences to default settings 
exports.preferencesDelete = function(req, res) {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });	
	} else {
		return res.status(204).json();
	}
}

// GET request to retrieve user's third party integrations
exports.integrationsEdit = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.statu(404).json({ errors: errors.array() });
	} else {
		res.status(200).json();
	}
};

exports.integrationsCreateGet = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.satus(422).json({ errors: errors.array() });
	} else {

	}
}

// POST request to create third party integration connections
exports.integrationsCreatePost = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
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
		return res.status(422).json({ errors: errors.array() });
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









