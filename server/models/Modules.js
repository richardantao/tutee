const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Modules", ModuleSchema)