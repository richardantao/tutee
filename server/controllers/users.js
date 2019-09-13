// import model
const mongoose = require("mongoose");
const Users = require("../models/Users");

// instantiate controller
const controller = [];

// validation methods
const { check, validationResult, filter } = require("express-validator");

controller.usersEdit = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		console.log("Running the model...")
		Users.findAll()
		.then(user => {
			console.log(user);
			return res.status(200).json(user);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

// POST request to create user's account
controller.usersCreate = (req, res) => {
	const errors = validationResult(req);
	
	// validate and sanitize input fields | add whitelists for each parameter
	check("firstName");
	check("lastName");
	check("password");
	check("email");
		
	filter("firstName").escape();
	filter("lastName").escape();
	filter("password").escape();
	filter("email").escape();

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// Sequelize INSERT using create(), create a users account
		Users.create()
		.then(() =>  {
			return res.redirect(301, "/");
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request to update user's account details
controller.usersUpdate = (req, res) => {
	const errors = validationResult(req);

	// validate and sanitize values
	check("userFirstName");
	check("userLastName");
	check("userEmail").isEmail();
	check("userCountry");
	check("userRegion");
	check("userInstitution");

	filter("userFirstName").escape();
	filter("userLastName").escape();
	filter("userEmail").escape();
	filter("userCountry").escape();
	filter("userRegion").escape();
	filter("userInstitution").escape();

		
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Users.update()
		.then(() => {
			return res.redirect(301), "/";
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

controller.usersDelete = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Users.delete()
		.then(() => {
			return res.redirect(301, "/");
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.arrays() });
		});
	}
}

module.exports = controller;