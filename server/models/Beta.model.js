const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const BetaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: {type: Schema.Types.ObjectId, required: true, ref: "Users"},		
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
    Schema: BetaSchema,
    Model: model("Beta", BetaSchema)
}