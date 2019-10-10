const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const ModuleSchema = new Schema({
	id: Schema.Types.ObjectId,
	userId: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
	courseId: {type: Schema.Types.ObjectId, required: true, ref: "Courses"},
	type: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	instructor: String,
	meta: {
		createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
		updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
	} 
});

module.exports = {
	Model: model("Modules", ModuleSchema),
	Schema: ModuleSchema
}