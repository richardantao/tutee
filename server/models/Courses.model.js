const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const CourseSchema = new Schema({
	id: Schema.Types.ObjectId,
	code: {type: String, required: true},
	title: {type: String, required: true},
	theme: {type: String, default: "#00BBFF"}, 
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model("Courses", CourseSchema);