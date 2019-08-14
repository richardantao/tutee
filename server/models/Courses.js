// import database
const database = require("../config/config");

// instantiate model
const Courses = [];

Courses.findAll = req => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Courses
		WHERE UserId = ${userId}`
	);
}

Courses.findById = req => {
	let userId = req.params.UserId;
	let courseId = req.params.CourseId;

	return database.query(
		`SELECT * FROM Courses
		WHERE UserId = ${userId} AND CourseId = ${courseId}`
	);
}

Courses.create = req => {
	let userId = req.params.UserId;
	let termId = req.params.TermId;
	let created = {
		courseCode: req.body.courseCode,
		courseName: req.body.courseName,
		courseTheme: req.body.courseTheme
	}

	return database.query(
		`INSERT INTO Courses
		(UserId, TermId, CourseCode, CourseName, CourseTheme)
		VALUES (${userId}, ${termId}, ${created.courseCode}, 
			${created.courseName}, ${created.courseTheme})`
	);
}

Courses.update = req => {
	let userId = req.params.UserId;
	let courseId = req.params.CourseId;
	let updated = {
		courseCode: req.body.courseCode,
		courseName: req.body.courseName,
		courseTheme: req.body.courseTheme
	}

	return database.query(
		`UPDATE Courses
		SET
			CourseCode = ${updated.courseCode},
			CourseName = ${updated.courseName},
			CourseTheme ${updated.courseTheme}
		WHERE UserId = ${userId} AND CourseId = ${courseId}`
	);
}

Courses.delete = req => {
	let userId = req.params.UserId;
	let courseId = req.params.CourseId;

	return database.query(
		`DELETE FROM Courses
		WHERE UserId = ${userId} AND CourseId = ${courseId}`
	);
}

// export model
module.exports = Courses;