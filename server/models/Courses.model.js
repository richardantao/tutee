const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const CourseSchema = new Schema({
	_id: Schema.Types.ObjectId,
	userId: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
	yearId: {type: Schema.Types.ObjectId, required: true, ref: "Years"},
	code: {type: String, required: true},
	title: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	theme: {type: String, default: "#00BBFF"}, 
	meta: {
		createdAt: {type: Date, default: () => moment().startOf("minute").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: Date, default: () => moment().startOf("minute").format("MMMM Do YYYY, HH:mm a")}
	}
});

module.exports = {
	Schema: CourseSchema,
	Model: model("Courses", CourseSchema)
}