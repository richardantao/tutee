const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ModuleSchema = new Schema({
	id: Schema.Types.ObjectId,
	type: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	instructor: String,
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	} 
});

module.exports = model("Modules", ModuleSchema)