const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const UserSchema = new Schema({
	id: Schema.Types.ObjectId,
    name: {
        first: {type: String, required: true},
        last: {type: String, required: true}
    },
    email: {
        address: {type: String, required: true, unique: true},
        verified: {type: Boolean, default: false}
    },
    password: {type: String, required: true, minlength: 6},
    years: {
        id: Schema.Types.ObjectId,
        title: {type: String, required: true},
        date: {
            start: {type: Date, required: true},
            end: {type: Date, required: true}
        },
        meta: {
            createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
            updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
        }
    },
    terms: {
        id: Schema.Types.ObjectId,
        title: {type: String, required: true},
        date: {
            start: {type: Date, required: true},
            end: {type: Date, required: true}
        },
        rotation: {type: String, required: true}, // required ?
        meta: {
            createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
            updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
        }
    },
    courses: {
        id: Schema.Types.ObjectId,
        code: {type: String, required: true},
        title: {type: String, required: true},
        date: {
            start: {type: Date, required: true},
            end: {type: Date, required: true}
        },
        theme: {type: String, default: "#00BBFF"}, 
        meta: {
            createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
            updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
	    }
    },
    modules: {
        id: Schema.Types.ObjectId,
        type: {type: String, required: true},
        date: {
            start: {type: Date, required: true},
            end: {type: Date, required: true}
        },
        instructor: String,
        meta: {
            createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
            updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
        } 
    },
    classes: {
        id: Schema.Types.ObjectId,
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
    },
    evaluations: {
        id: Schema.Types.ObjectId,
        title: {type: String, required: true},
        type: {type: String, required: true},
        location: String,
        date: {type: Date, required: true},
        time: {type: Date, required: true},
        duration: {type: Number, required: true, min: [0, ""]},
        grade: {
            weighting: {type: Number, min: [0, ""], max: [100, ""]},
            score: {type: Number, min: [0, ""], max: [100, ""]}
        },
        meta: {
            createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
            updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
        }
    },
    tasks: {
        id: Schema.Types.ObjectId,
        title: {type: String, required: true},
        type: {type: String, required: true},
        deadline: {type: Date, required: true},
        completion: {type: Number, default: 0, min: [0, "Task completion cannot be less than 0"], max: [100, "Task completion cannot be greater than 100%"]},
        note: String,
        meta: {
            createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
            updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
        }
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
    integrations: {
        id: Schema.Types.ObjectId,

    },
    meta: {
        membership: {type: String, default: "Basic", enum: ["Admin", "Basic", "Beta", "Premium"]},
        sessions: {type: Number, default: 0, min: 0},
        lastActiveAt: {type: Date, default: null},
        createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
		updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
	}
});

module.exports = model('Users', UserSchema);