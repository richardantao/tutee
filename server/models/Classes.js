// import database
const database = require("../config/config");

// instantiate model
const Classes = [];

Classes.findAll = () => {
	return database.query(
		``
	);
}

Classes.findById = () => {
	return database.query(
		``
	);
}

Classes.create = () => {
	return database.query(
		``
	);
}

Classes.update = () => {
	return database.query(
		``
	);
}

Classes.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Classes;
