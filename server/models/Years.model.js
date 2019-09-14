const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const moment = require("moment");

const YearSchema = new Schema({
	id: Schema.Types.ObjectId,
	title: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	meta: {
		createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model('Years', YearSchema);