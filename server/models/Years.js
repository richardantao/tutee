// import database
const database = require("../config/config");

// instantiate model
const Years = [];

Years.findAll = () => {
	return database.query(
		``
	);
}

Years.findbyId = () => {
	return database.query(
		``
	);
}

Years.create = () => {
	return database.query(
		``
	);
}

Years.update = () => {
	return database.query(
		``
	);
}

Years.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Years;