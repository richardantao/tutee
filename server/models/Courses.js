const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
	code: String,
	title: String,
	theme: String, 
	meta: {
		createdAt: Date,
        updatedAt: Date
	}
});

module.exports = mongoose.model("Courses", CourseSchema);