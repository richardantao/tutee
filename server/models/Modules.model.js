const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const ModuleSchema = new Schema({
	id: Schema.Types.ObjectId,
	parents: {
		user: {
			id: {type: Schema.Types.ObjectId, required: true},
			name: {
				first: {type: String, required: true},
				last: {type: String, required: true}
			}
		},
		course: {
			id: {type: Schema.Types.ObjectId, required: true},
			title: {type: String, required: true}
		}
	},
	type: {type: String, required: true},
	date: {
		start: {type: moment().format("MMMM Do YYYY"), required: true},
		end: {type: moment().format("MMMM Do YYYY"), required: true}
	},
	instructor: String,
	meta: {
		createdAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
	} 
});

module.exports = model("Modules", ModuleSchema);