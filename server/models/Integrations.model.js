const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const IntegrationSchema = new Schema({
    id: Schema.Types.ObjectId,
    parent: {
        user: {type: Schema.Types.ObjectId, required: true}
    },
    service: {type: String, required: true},
    meta: {
        createdAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: moment().format("MMMM Do YYYY, HH:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
    }
});

module.exports = model("Integrations", IntegrationSchema);