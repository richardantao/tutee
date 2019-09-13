const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const IntegrationSchema = new Schema({

});

module.exports = model("Integrations", IntegrationSchema);