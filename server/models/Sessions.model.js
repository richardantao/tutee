const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const SessionSchema = new Schema({
    id: Schema.Types.ObjectId,
    uuid: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
    meta: {
        createdAt: {type: Date, default: moment().startOf("minute").format("MMMM Do YYYY, HH:mm a")},
        updated: {type: Date, default: moment().startOf("minute").format("MMMM Do YYYY, HH:mm a")}
    }
});

module.exports = {
    Schema: SessionSchema,
    Model: model("Sessions", SessionSchema)
}