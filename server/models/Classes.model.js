const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const ClassSchema = new Schema({
    id: Schema.Types.ObjectId,
    parents: {
        user: {
			id: {type: Schema.Types.ObjectId, required: true},
			name: {
				first: {type: String, required: true},
				last: {type: String, required: true}
			}
        },
        course: {
            id: {type: Schema.Types.ObjectId, required: true},
            title: {type: String, required: true}
        },
		module: {
			id: {type: Schema.Types.ObjectId, required: true},
            type: {type: String, required: true}
		}      
    },
    location: String,
    start: {
        date: {type: moment().format("MMMM Do YYYY"), required: true},
        time: {type: moment().format("hh:mm"), required: true}
    },
    end: {
        date: {type: moment().format("MMMM Do YYYY"), required: true},
        time: {type: moment().format("hh:mm"), required: true}
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
    note: String,
    meta: {
	    createdAt: {type: moment().format("MMMM Do YYYY, hh:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, hh:mm a")},
        updatedAt: {type: moment().format("MMMM Do YYYY, hh:mm a"), default: moment().startOf("date").format("MMMM Do YYYY, hh:mm a")}
    }
});

module.exports = model("Classes", ClassSchema);