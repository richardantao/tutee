const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const BetaSchema = new Schema({
    id: Schema.Types.ObjectId,
    parents: {
        user: {
			id: {type: Schema.Types.ObjectId, required: true},
			name: {
				first: {type: String, required: true},
				last: {type: String, required: true}
			}
		}
    },
    personal: {
        name: {type: String, required: true},
        email: {type: String, required: true} 
    },
    meta: {
	    createdAt: {type: Date, default: () => moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
        updatedAt: {type: Date, default: () => moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
    }
});

module.exports = model("Beta", BetaSchema);