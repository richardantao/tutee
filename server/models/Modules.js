const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ModuleSchema = new Schema({
	type: String,
	date: {
		start: Date,
		end: Date
	},
	instructor: String,
	meta: {
		createdAt: Date,
		updateAt: Date
	} 
});

module.exports = model("Modules", ModuleSchema)