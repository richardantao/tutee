const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const EvaluationSchema = new Schema({
	title: {type: String, required: true},
  	type: {type: String, required: true},
  	location: String,
  	date: {type: Date, required: true},
  	time: {type: String, required: true},
	duration: {type: Number, required: true},
	grade: {
		weighting: Number,
  		score: Number
	},
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model("Evaluations", EvaluationSchema);