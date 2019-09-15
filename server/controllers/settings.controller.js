const async = require("async");

const Users = require("../models/Users.model")

// instantiate controller
const controller = [];

controller.index = (req, res) => {
	async.parallel({
		profile: (callback) => {

		},
		password: (callback) => {

		},
		preferences: (callback) => {

		},  
		integrations: (callback) => {

		},  
	});
}

controller.profileCreateGet = (req, res) => {

}

// POST request to create initial profile settings | redundant?
controller.profileCreatePost = (req, res) => {
	const user = new Users({
		name: {
			first: req.body.firstName,
			last: req.body.lastName
		},
		email: req.body.email,
		password: req.body.password
	});

	user.save()
	.then(newUser => {
		return res.json(newUser);
	})
	.catch(err => {
		return res.status(500).json({
			message: "An error occured while creating your new account"
		});
	});
};

controller.profileUpdate = (req, res) => {
	Users.findByIdAndUpdate({
		name: {
			first: req.body.firstName,
			last: req.body.lastName
		},
		email: {
			address: req.body.email,
			verified: true
		},
		location: {
			country: req.body.country,
			region: req.body.region,
			institution: req.body.institution,
			school: req.body.school
		}
	})
	.then(updatedUser => {
		if(!updatedUser) {
			return res.status(404).json({
				message: "The information regarding your profile was not successfully found"
			});
		} else {
			return res.json(updatedUser);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The information regarding your profile was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating your profile"
			});
		}
	});
};

controller.profileDelete = (req, res) => {
	Users.findByIdAndDelete(req.params.id)
	.then(deletedUser => {
		if(!deletedUser) {
			return res.status(404).json({
				message: "The server could not successfully find the account you are trying to delete. Please try again."
			});
		} else {
			return res.json(deletedUser);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).json({
				message: "The server could not successfully find the account you are trying to delete. Please try again."
			});	
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting your card"
			});
		}
	});
};

// GET request to retrieve user's password in settings page
controller.passwordEdit = (req, res) => {
	
};

// PUT request to update database with user's new password
controller.passwordUpdate = (req, res) => {
	Users.findById(req.params.id, {
		password: req.body.password
	})
	.then(updatedPassword => {
		if(!updatedPassword) {
			return res.status(404).json({
				message: "The server was unable to successfully find your stored password. Please reload the page"
			});
		} else {
			return res.json(updatedPassword);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find your stored password. Please reload the page"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating your password"
			});	
		}
	});	
};

// GET request to retrieve user's preferences 
controller.preferencesEdit = (req, res) => {
	Users.findById(req.params.id)
	.then(selectedPreferences => {
		if(!selectedPreferences) {
			return res.status(404).json({
				message: "The server was unable to sucessfully find your preferences"
			});
		} else {
			return res.json(selectedPreferences);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to sucessfully find your preferences"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving your preferences"
			});
		}
	});
};

// POST request to update user's personal app preferences
controller.preferencesUpdate = (req, res) => {
	// selective update
	Users.findByIdAndUpdate({
		preferences: {
			startDay: req.body.startDay,
			startTime: req.body.startTime,
			defaultDuration: req.body.defaultDuration,
			defaultCalendar: req.body.defaultCalendar,
			onEmailList: req.body.onEmailList
		}
	})
	.then(updatedPreferences => {
		if(!updatedPreferences) {
			return res.status(404).json({
				message: "The server was unable to successfully find the preferences you are trying to update"
			});
		} else {
			return res.json(updatedPreferences);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find the preferences you are trying to update"
			});
		} else {
			return res.status(500).json({
				message: "An error occured while updating your preferences"
			});
		}
	});
};

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