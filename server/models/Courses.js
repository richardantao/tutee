const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const CourseSchema = new Schema({
	code: {type: String, required: true},
	title: {type: String, required: true},
	theme: {type: String, default: "#00BBFF"}, 
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model("Courses", CourseSchema);