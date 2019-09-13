const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const TaskSchema = new Schema({
	id: Schema.Types.ObjectId,
	title: {type: String, required: true},
	type: {type: String, required: true},
	deadline: {type: Date, required: true},
	completion: {type: Number, default: 0, min: 0, max: 100},
	note: String,
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model("Tasks", TaskSchema);