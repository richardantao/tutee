// import database
const database = require("../config/config");

// instantiate model
const Tasks = [];

/* model queries */
Tasks.findAll = () => {
	return database.query(
		``
	);
}

Tasks.findById = () => {
	return database.query(
		``
	);
}

Tasks.create = () => {
	return database.query(
		``
	);
}

Tasks.update = () => {
	return database.query(
		``
	);
}

Tasks.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Tasks;