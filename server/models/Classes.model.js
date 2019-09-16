const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const ClassSchema = new Schema({
    id: Schema.Types.ObjectId,
    module: {type: Schema.Types.ObjectId, required: true},
    location: String,
    date: {
        start: {type: Date, required: true},
        end: {type: Date, required: true}
    },
    time: {
        start: {type: String, required: true},
        end: {type: String, required: true}
    },
    repeat: {
        Monday: {type: Boolean, default: false},
        Tuesday: {type: Boolean, default: false},
        Wednesday: {type: Boolean, default: false},
        Thursday: {type: Boolean, default: false},
        Friday: {type: Boolean, default: false},
        Saturday: {type: Boolean, default: false},
        Sunday: {type: Boolean, default: false},
    },
    occurence: {type: String, enum: ["Does not repeat", "Daily", "Weekdays", "Weekly", "Biweekly"]},
    meta: {
	    createdAt: {type: Date, default: Date.now()},
        updatedAt: {type: Date, default: Date.now()}
    }
});

module.exports = model("Classes", ClassSchema);