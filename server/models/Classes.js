const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const model = mongoose.model;

const ClassSchema = new Schema({
    id: Schema.Types.ObjectId,
    meta: {
	    createdAt: {type: Date, default: Date.now()},
        updatedAt: {type: Date, default: Date.now()}
    }
});

module.exports = model("Classes", ClassSchema);