// import database
const database = require("../config/config");

// instantiate model
const Preferences = [];

Preferences.findAll = () => {
	return database.query(
		``
	);
}

Preferences.findById = () => {
	return database.query(
		``
	);
}

Preferences.create = () => {
	return database.query(
		``
	);
}

Preferences.update = () => {
	return database.query(
		``
	);
}

Preferences.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Preferences;
