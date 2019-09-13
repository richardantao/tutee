const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const YearSchema = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	date: {
		start: Date,
		end: Date
	},
	meta: {
		createdAt: Date,
		updatedAt: Date
	}
});

module.exports = model('Years', YearSchema);