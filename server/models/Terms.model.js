const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const moment = require("moment");

const TermSchema = new Schema({
	id: Schema.Types.ObjectId,
	parent: {
		user: {
			id: {type: Schema.Types.ObjectId, required: true},
			name: {
				first: {type: String, required: true},
				last: {type: String, required: true}
			}
		},
		year: {
			id: {type: Schema.Types.ObjectId, required: true},
			title: {type: String, required: true}
		}
	},
	title: {type: String, required: true},
  	date: {
		start: {type: Date, required: true},
		end: {type: Date, required: true}
	},
	rotation: {type: String, required: true}, // required ?
	meta: {
		createdAt: {type: Date, default: () => moment().startOf("date").format("MMMM Do YYYY, HH:mm a")},
		updatedAt: {type: Date, default: () => moment().startOf("date").format("MMMM Do YYYY, HH:mm a")}
	}
});

module.exports = model('Terms', TermSchema);