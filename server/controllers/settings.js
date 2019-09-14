const async = require("async");

// instantiate controller
const controller = [];

controller.index = (req, res) => {
	async.parallel({

	});
}

controller.profileCreateGet = (req, res) => {

}

// POST request to create initial profile settings | redundant?
controller.profileCreatePost = (req, res) => {

};


// PUT request to update existing profile settings 
controller.profileUpdate = (req, res) => {
	
};

// DELETE user's account
controller.profileDelete = (req, res) => {

};

// GET request to retrieve user's password in settings page
controller.passwordEdit = (req, res) => {
	
};

controller.passwordCreateGet = (req, res) => {

}

// POST request to create user's password | redundant
controller.passwordCreatePost = (req, res) => {
	
};

// PUT request to update database with user's new password
controller.passwordUpdate = (req, res) => {
	
};


// GET request to retrieve user's preferences 
controller.preferencesEdit = (req, res) => {

};

controller.preferencesCreateGet = (req, res) => {
	
}

// POST request to create user's preferences | redundant? maybe not
controller.preferencesCreatePost = (req, res) => {
	
};


// POST request to update user's personal app preferences
controller.preferencesUpdate = (req, res) => {
	
};

// DELETE request to delete (reset?) user's preferences to default settings 
controller.preferencesDelete = (req, res) => {
	
}

/* Future routes */

// GET request to retrieve user's third party integrations
controller.integrationsEdit = (req, res) => {
	
};

controller.integrationsCreateGet = (req, res) => {
	
}

// POST request to create third party integration connections
controller.integrationsCreatePost = (req, res) => {
	
};

// PUT request to update user's third party integrations
controller.integrationsUpdate = (req, res) => {
	
};

// DELETE request to delete user's third party integrations
controller.integrationsDelete = (req, res) => {
	
}

module.exports = controller;