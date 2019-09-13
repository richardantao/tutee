const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const CourseSchema = new Schema({
	code: String,
	title: String,
	theme: String, 
	meta: {
		createdAt: Date,
        updatedAt: Date
	}
});

module.exports = model("Courses", CourseSchema);