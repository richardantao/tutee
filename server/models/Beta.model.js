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
    profile: {
        name: {type: String, required: true},
        email: {type: String, required: true} 
    },
    meta: {
	    createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
        updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
    }
});

module.exports = {
    Model: model("Beta", BetaSchema),
    Schema: BetaSchema
}