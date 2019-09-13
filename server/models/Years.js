const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const YearSchema = new mongoose.Schema({
	// id: Schema.Types.ObjectId,
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

module.exports = mongoose.model('Years', YearSchema);