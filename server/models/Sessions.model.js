const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const SessionSchema = new Schema({
    id: Schema.Types.ObjectId,
    
    meta: {
        createdAt: {type: Date, default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
        updated: {type: Date, default: moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
    }
});

module.exports = model("Sessions", SessionSchema);