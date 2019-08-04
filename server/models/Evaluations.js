// import configurations
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models

const Users = require("./Users");
const Courses = require("./Courses");

class Evals extends Model{}
Evals.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	title: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	type: {
		type: Sequelize.STRING(30),
		allowNull: false
	},
	location: {
		type: Sequelize.STRING(50),
	},
	date: {
		type: Sequelize.DATE,
		allowNull: false
	},
	time: {
		type: Sequelize.STRING(20),
		allowNull: false
	},
	duration: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	weighting: {
		type: Sequelize.DECIMAL(10,0)
	},
	score: {
		type: Sequelize.DECIMAL(10,0)
	}
}, { sequelize, modelName: "Evals" });

Evals.belongsTo(Users, {as: "Users"});
Evals.belongsTo(Courses, {as: "Courses"});

module.exports = Evals;