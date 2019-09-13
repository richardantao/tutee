const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Evaluations", EvaluationSchema);