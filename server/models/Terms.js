const mongoose = require("mongoose");

const TermSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Terms', TermSchema);