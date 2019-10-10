const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const IntegrationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
    service: {type: String, required: true},
    meta: {
        createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
		updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
    }
});

module.exports = {
    Schema: IntegrationSchema,
    Model: model("Integrations", IntegrationSchema)
}