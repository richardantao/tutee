const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
	// id: Schema.Types.ObjectId,
	name: {
		first: String,
		last: String
	},
	email: {
		address: String,
		verified: Boolean
	},
	password: String,
    location: {
    	country: String,
        region: String,
        institution: String,
        school: String
    },
    preferences: {
        startDay: String,
        startTime: String,
        defaultDuration: Number,
        defaultCalendar: String,
        onEmailList: Boolean
    },
    meta: {
        isBeta: Boolean,
        membership: String,
        sessions: Number,
        lastLogin: Date,
        createdAt: Date,
        updatedAt: Date
	}
});

module.exports = mongoose.model('Users', UserSchema);