const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const TermSchema = new Schema({
	title: String,
  	date: {
		start: Date,
		end: Date
	  },
	  rotation: String,
	  meta: {
		  createdAt: Date,
		  updatedAt: Date
	  }
});

module.exports = model('Terms', TermSchema);