const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const ClassSchema = new Schema({
    id: Schema.Types.ObjectId,
    module: {type: String, required: true},
    date: {
        start: {type: Date, required: true},
        end: {type: Date, required: true}
    },
    time: {
        start: {type: String, required: true},
        end: {type: String, required: true}
    },
    location: String,
    meta: {
	    createdAt: {type: Date, default: Date.now()},
        updatedAt: {type: Date, default: Date.now()}
    }
});

module.exports = model("Classes", ClassSchema);