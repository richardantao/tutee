const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

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