const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const SessionSchema = new Schema({
    id: Schema.Types.ObjectId,
    
    meta: {
        createdAt: {type: Date, default: Date.now()},
        updated: {type: Date, default: Date.now()}
    }
});

module.exports = model("Sessions", SessionSchema);