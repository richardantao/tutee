const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const TaskSchema = new Schema({
	title: String,
	type: String,
	deadline: Date,
	completion: Number,
	note: String,
	meta: {
		createdAt: Date,
		updatedAt: Date
	}
});

module.exports = model("Tasks", TaskSchema);