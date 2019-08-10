// import Sequelize dependencies
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models
const Users = require("./Users");
const Terms = require("./Terms")

module.exports = () => {
	class Courses extends Model {}
	Courses.init({
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		code: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		name: {
			type: Sequelize.STRING(75),
			allowNull: false
		},
		theme: {
			type: Sequelize.STRING(40),
			allowNull: false
		}
	}, { sequelize, modelName: "Courses" });

	Courses.belongsTo(Users, {as: "user"});
	Courses.belongsTo(Terms, {as: "term"});

	return Courses;
}
