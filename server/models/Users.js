// import database
const database = require("../config/config");

// instantiate model
const Users = [];

// GET all users; admin query
Users.findAll = () => {
	return database.query(
		``
	);
}

// GET when user opens personal settings page
Users.findById = (req) => {
	let userId = req.params.id;

	return database.query(
		`SELECT   
		WHERE UserId = ${userId}`
	);
}

// POST to db when user creates a new account
Users.create = () => {
	return database.query(
		`INSERT `
	);
}

// PUT when user updates personal data in settings tab
Users.update = () => {
	return database.query(
		`UPDATE`
	);
}

// DELETE when user deletes account
Users.delete = () => {
	let id = req.params.id;
	return database.query(
		``
	);
}

// export model
module.exports = Users;