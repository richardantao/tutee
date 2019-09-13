const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
	id: Schema.Types.ObjectId,
	name: {
		first: {type: String, required: true},
		last: {type: String, required: true}
	},
	email: {
		address: {type: String, required: true},
		verified: {type: Boolean, default: false}
	},
	password: {type: String, required: true},
    location: {
    	country: String,
        region: String,
        institution: String,
        school: String
    },
    preferences: {
        startDay: String,
        startTime: {type: String, default: "8:00am"},
        defaultDuration: {type: Number, default: 50, min: [0, "Default duration must be greater than 0"]},
        defaultCalendar: {type: String, default: "Week"},
        onEmailList: {type: Boolean, default: true}
    },
    meta: {
        isBeta: Boolean,
        membership: {type: String, default: "Basic"},
        sessions: {type: Number, default: 0, min: 0},
        lastLogin: Date,
        createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model('Users', UserSchema);