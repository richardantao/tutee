const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const ClassSchema = new Schema({
    _id: Schema.Types.ObjectId,
    uuid: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
    course: {
        id: {type: Schema.Types.ObjectId, required: true, ref: "Courses"},
        title: {type: String, required: true}
    },	
	module: {
        id: {type: Schema.Types.ObjectId, required: true, ref: "Modules"},
        title: {type: String, required: true}
    },
    location: String,
    start: {
        date: {type: Date, required: true},
        time: {type: String, required: true}
    },
    end: {
        date: {type: Date, required: true},
        time: {type: String, required: true}
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
    description: String,
    meta: {
	    createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
        updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
    }
});

module.exports = {
    Schema: ClassSchema,
    Model: model("Class", ClassSchema)
}