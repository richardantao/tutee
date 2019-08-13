// import database
const database = require("../config/config");

// instantiate model
const Courses = [];

Courses.findAll = () => {
	return database.query(
		``
	);
}

Courses.findById = () => {
	return database.query(
		``
	);
}

Courses.create = () => {
	return database.query(
		``
	);
}

Courses.update = () => {
	return database.query(
		``
	);
}

Courses.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Courses;