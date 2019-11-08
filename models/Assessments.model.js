const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const AssessmentSchema = new Schema({
	id: Schema.Types.ObjectId,
	parent: {type: Schema.Types.ObjectId, required: true, ref: "Course"},
	title: {type: String, required: true},
  	type: {type: String, required: true},
  	location: String,
  	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
  	time: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	grade: {
		weighting: {type: Number, min: [0, ""], max: [100, ""]},
  		score: {type: Number, min: [0, ""], max: [100, ""]}
	},
	meta: {
		createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
		updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
	}
});

module.exports = {
	Schema: AssessmentSchema,
	Model: model("Assessment", AssessmentSchema)
}