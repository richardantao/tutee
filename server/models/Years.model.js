const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

// import { Schema, model } from "mongoose"; 

const moment = require("moment");

const YearSchema = new Schema({
	id: Schema.Types.ObjectId,
	parents: {
		user: {type: Schema.Types.ObjectId, required: true}
	},
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

// export default YearSchema;

module.exports = model("Years", YearSchema);