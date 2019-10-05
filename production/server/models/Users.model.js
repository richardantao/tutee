const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const UserSchema = new Schema({
	id: Schema.Types.ObjectId,
	profile: {
        name: {
            first: {type: String, required: true},
            last: {type: String, required: true}
        },
        email: {
            address: {type: String, required: true},
            verified: {type: Boolean, default: false}
        },
        password: {type: String, required: true, minlength: 6}
    },
    location: {
    	country: String,
        region: String,
        institution: {type: String, enum: ["University", "College", "High School", "Middle School"]},
        school: String
    },
    preferences: {
        startDay: {type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
        startTime: {type: String, default: "8:00am"},
        defaultDuration: {type: Number, default: 50, min: [0, "Default duration must be greater than 0"]},
        defaultCalendar: {type: String, default: "Week", enum: ["Month", "Week", "Day", "Agenda"]},
        onEmailList: {type: Boolean, default: true}
    },
    meta: {
        isBeta: Boolean,
        membership: {type: String, default: "Basic", enum: ["Basic", "Premium", "Beta"]},
        sessions: {type: Number, default: 0, min: 0},
        lastActiveAt: {type: Date, default: null},
        createdAt: {type: Date, default: Date.now()},
		updatedAt: {type: Date, default: Date.now()}
	}
});

module.exports = model('Users', UserSchema);