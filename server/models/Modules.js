// import Sequelize dependencies
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models
const Users = require("./Users");
const Courses = require("./Courses")

module.exports = () => {
	class Modules extends Model{}
	Modules.init({
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		type: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		start: {
			type: Sequelize.DATE,
			allowNull: false
		},
		end: {
			type: Sequelize.DATE,
			allowNull: false
		},
		instructor: {
			type: Sequelize.STRING(60)
		}
	}, { sequelize, modelName: "modules" });

	Modules.belongsTo(Users, {as: "user"});
	Modules.belongsTo(Courses, {as: "course"});
}
