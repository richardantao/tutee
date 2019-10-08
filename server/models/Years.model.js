const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

// import { Schema, model } from "mongoose"; 

const moment = require("moment");

const YearSchema = new Schema({
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
	title: {type: String, required: true},
	date: {
		start: {type: moment().format("MMMM Do YYYY"), required: true},
		end: {type: moment().format("MMMM Do YYYY"), required: true}
	},
	meta: {
		createdAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
	}
});

// export default YearSchema;

module.exports = model("Years", YearSchema);