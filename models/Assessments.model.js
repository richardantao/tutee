const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const AssessmentSchema = new Schema({
	id: Schema.Types.ObjectId,
	uuid: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
	course: {
		id: {type: Schema.Types.ObjectId, required: true, ref: "Courses"},
		title: {type: String, required: true}
	},
	title: {type: String, required: true},
  	type: {type: String, required: true},
  	location: String,
  	date: {type: Date, required: true},
  	time: {type: Date, required: true},
	duration: {type: Number, required: true, min: [0, ""]},
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