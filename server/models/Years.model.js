const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const YearSchema = new Schema({
	id: Schema.Types.ObjectId,
	uuid: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
	title: {type: String, required: true},
	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	meta: {
		createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
		updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
	}
});

module.exports = {
	Schema: YearSchema,
	Model: model("Years", YearSchema)
}