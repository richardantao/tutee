const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const EvaluationSchema = new Schema({
	title: String,
  	type: String,
  	location: String,
  	date: Date,
  	time: String,
	duration: Number,
	grade: {
		weighting: Number,
  		score: Number
	},
	meta: {
		createdAt: Date,
		updatedAt: Date
	}
});

module.exports = model("Evaluations", EvaluationSchema);