const Schema = require("mongoose").Schema; 
const model = require("mongoose").model;

const moment = require("moment");

const BetaSchema = new Schema({
    id: Schema.Types.ObjectId,

    meta: {
	    createdAt: {type: Date, default: Date.now()},
        updatedAt: {type: Date, default: Date.now()}
    }
});

module.exports = model("Beta", BetaSchema);