const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const CourseSchema = new Schema({
	id: Schema.Types.ObjectId,
	parents: {
		user: {type: Schema.Types.ObjectId, required: true}, 
		year: {type: Schema.Types.ObjectId, required: true}
	},
	code: {type: String, required: true},
	title: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	theme: {type: String, default: "#00BBFF"}, 
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model("Courses", CourseSchema);