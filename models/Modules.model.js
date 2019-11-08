const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const ModuleSchema = new Schema({
	_id: Schema.Types.ObjectId,
	parent: {type: Schema.Types.ObjectId, required: true, ref: "Course"},
	title: {type: String, required: true},
	instructor: String,
	meta: {
		createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
		updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
	} 
});

module.exports = {
	Schema: ModuleSchema,
	Model: model("Module", ModuleSchema)
}