const async = require("async");
const moment = require("moment");

// import model
const User = require("../models/User.model");

// instantiate controller
const controller = [];

controller.index = (req, res) => {
	async.parallel({
		profile: (callback) => {
			User.findById({
				"id": req.params.id
			}, {
				"profile.name": 1,
				"profile.email.address": 1,
				"location": 1
			})
			.then(selectedProfile => {
				if(!selectedProfile) {
					return res.status(404).json({
						message: "The server was unable to successfully find your profile"
					});
				} else {
					return res.json(selectedProfile);
				}
			})
			.exec(callback)
			.catch(err => {
				if(err.kind === "ObjectId") {
					return res.status(404).json({
						message: "The server was unable to successfully find your profile"
					});
				} else {
					return res.status(500).json({
						message: err.message || "An error occured while retrieving your profile"
					});
				}
			});
		},
		password: (callback) => {
			User.findById({
				"id": req.params.id
			},{
				"profile.password": 1 
			})
			.then(selectedPassword => {
				if(!selectedPassword) {
					return res.status(404).json({
						message: "The server was unable to successfully find your current password"
					});
				} else {
					return res.json(selectedPassword);
				}
			})
			.exec(callback)
			.catch(err => {
				if(err.kind === "ObjectId") {
					return res.status(404).json({
						message: "The server was unable to successfully find your current password"
					});
				} else {
					return res.status(500).json({
						message: err.message || "An error occured while fetching your current password"
					});
				}
			});
		},
		preferences: (callback) => {
			User.findById({
				"id": req.params.id
			}, {
				"preferences": 1
			})
			.then(selectedPreferences => {
				if(!selectedPreferences) {
					return res.status(404).json({
						message: "The server was unable to successfully retrieve your preferences"
					});
				} else {
					return res.json(selectedPreferences);
				}
			})
			.exec(callback)
			.catch(err => {
				if(err.kind === "ObjectId") {
					return res.status(404).json({
						message: "The server was unable to successfully retrieve your preferences"
					});
				} else {
					return res.status(500).json({
						message: err.message || "An error occured while retrieving your preferences"
					});
				}
			});
		},  
		integrations: (callback) => {
			User.find({
				"_id": req.params._id
			}, {
				"integrations": 1
			})
			.then(selectedIntegrations => {
				if(!selectedIntegrations) {
					return res.status(404).json({
						message: "The server was unable to successfully find your integrations"	
					});
				} else {
					return res.json(selectedIntegrations);
				}
			})
			.exec(callback)
			.catch(err => {
				if(err.kind === "ObjectId") {
					return res.status(404).json({
						message: "The server was unable to successfully find your integrations"	
					});
				} else {
					return res.status(500).json({
						message: err.message || "An error occured while retrieving your integrations"
					});
				}
			})
		},  
	});
}

controller.profileUpdate = (req, res) => {
	User.findByIdAndUpdate({
		"_id": req.params._id
	}, 
	{
		$set: {
			profile: {
				name: {
					first: req.body.firstName,
					last: req.body.lastName
				},
				email: {
					address: req.body.email,
					verified: true
				}
			},
			location: {
				country: req.body.country,
				region: req.body.region,
				institution: req.body.institution,
				school: req.body.school
			}
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
	User.findByIdAndDelete({
		"_id": req.params._id
	})
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
	User.find({
		_id: req.params.id
	},{
		password: 1
	})
	.then(password => {
		return res.status(200).json(password);
	})
	.catch(err => {
		return res.status(500).json({
			message:  err.message || "A error on the server occured while processing your request"
		});
	});
};

// PUT request to update database with user's new password
controller.passwordUpdate = (req, res) => {
	User.findById({
		_id: req.params.id
	}, 
	{
		$set: {
			profile: {
				password: req.body.password
			}
		}
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
	User.findById({
		"_id": req.params._id
	})
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
	User.findByIdAndUpdate({
		"_id": req.params._id
	}, 
	{
		$set: {
			preferences: {
				startDay: req.body.day,
				startTime: req.body.time,
				defaultDuration: req.body.duration,
				defaultCalendar: req.body.calendar,
				onEmailList: req.body.email
			}
		}
	})
	.then(updatedPreferences => {
		if(!updatedPreferences) {
			return res.status(404).json({
				message: "The server was unable to successfully find the preferences you are trying to update"
			});
		} else {
			return res.json(updatedPreferences);
		};
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
		};
	});
};

/* Future routes */

// GET request to retrieve user's third party integrations
controller.integrationsEdit = (req, res) => {
	
};

controller.integrationsNew = (req, res) => {
	
};

// POST request to create third party integration connections
controller.integrationsCreate = (req, res) => {
	
};

// PUT request to update user's third party integrations
controller.integrationsUpdate = (req, res) => {
	
};

// DELETE request to delete user's third party integrations
controller.integrationsDelete = (req, res) => {
	
};

module.exports = controller;