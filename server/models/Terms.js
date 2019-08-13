// import database
const database = require("../config/config");

// instantiate model
const Terms = [];

Terms.findAll = () => {
	return database.query(
		``
	);
}

Terms.findById = () => {
	return database.query(
		``
	);
}

Terms.create = () => {
	return database.query(
		``
	);
}

Terms.update = () => {
	return database.query(
		``
	);
}

Terms.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Terms;