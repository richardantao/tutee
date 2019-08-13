// import database
const database = require("../config/config");

// instantiate model
const Users = [];

// GET all users; admin query
Users.findAll = () => {
	return database.query(

	);
}

// GET when user opens personal settings page
Users.findById = () => {
	return database.query(

	);
}

// POST to db when user creates a new account
Users.create = () => {
	return database.query(

	);
}

// PUT when user updates personal data in settings tab
Users.update = () => {
	return database.query(

	);
}

// DELETE when user deletes account
Users.delete = () => {
	return database.query(

	);
}

module.exports = Users;