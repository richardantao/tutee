const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const EvaluationSchema = new Schema({
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
  	type: {type: String, required: true},
  	location: String,
  	date: {type: moment().format("MMMM Do YYYY"), required: true},
  	time: {type: moment().format("HH:mm a"), required: true},
	duration: {type: Number, required: true, min: [0, ""]},
	grade: {
		weighting: {type: Number, min: [0, ""], max: [100, ""]},
  		score: {type: Number, min: [0, ""], max: [100, ""]}
	},
	meta: {
		createdAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
	}
});

module.exports = model("Evaluations", EvaluationSchema);