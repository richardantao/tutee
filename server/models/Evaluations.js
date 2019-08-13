// import database 
const database = require("../config/config");

// instantiate model
const Evals = [];

Evals.findAll = () => {
	return database.query(
		``
	);
}

Evals.findById = () => {
	return database.query(
		``
	);
}

Evals.create = () => {
	return database.query(
		``
	);
}

Evals.update = () => {
	return database.query(
		``
	);
}

Evals.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Evals;