const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const TaskSchema = new Schema({
	id: Schema.Types.ObjectId,
	parents: {
		user: {
			id: {type: Schema.Types.ObjectId, required: true},
			name: {
				first: {type: String, required: true},
				last: {type: String, required: true}
			}
		},
		module: {
			id: {type: Schema.Types.ObjectId, required: true},
			type: {type: String, required: true}
		}
	},
	title: {type: String, required: true},
	type: {type: String, required: true},
	deadline: {type: moment().format("MMMM Do YYYY"), required: true},
	completion: {type: Number, default: 0, min: [0, "Task completion cannot be less than 0"], max: [100, "Task completion cannot be greater than 100%"]},
	note: String,
	meta: {
		createdAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
	}
});

module.exports = model("Tasks", TaskSchema);