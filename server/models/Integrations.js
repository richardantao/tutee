const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const momemnt = require("moment");

const IntegrationSchema = new Schema({
    id: Schema.Types.ObjectId,
    meta: {
        createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
    }
});

module.exports = model("Integrations", IntegrationSchema);