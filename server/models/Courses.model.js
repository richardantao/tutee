const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const CourseSchema = new Schema({
	id: Schema.Types.ObjectId,
	parents: {
		user: {
			id: {type: Schema.Types.ObjectId, required: true},
			name: {
				first: {type: String, required: true},
				last: {type: String, required: true}
			}
		},
		year: {
			id: {type: Schema.Types.ObjectId, required: true},
			title: {type: String, required: true}
		}
	},
	code: {type: String, required: true},
	title: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	theme: {type: String, default: "#00BBFF"}, 
	meta: {
		createdAt: {type: Date, default: () => moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: Date, default: () => moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
	}
});

module.exports = model("Courses", CourseSchema);