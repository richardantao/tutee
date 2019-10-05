const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const IntegrationSchema = new Schema({
    id: Schema.Types.ObjectId,
    parent: {
        user: {type: Schema.Types.ObjectId, required: true}
    },
    meta: {
        createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
    }
});

module.exports = model("Integrations", IntegrationSchema);