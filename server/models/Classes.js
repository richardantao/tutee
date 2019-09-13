const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const model = mongoose.model;

const ClassSchema = new Schema({
	
});

module.exports = model("Classes", ClassSchema);