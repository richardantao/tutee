const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

const Users = require("./Users");
const Courses = require("./Courses");

module.exports = () => {
	class Tasks extends Model{}
	Tasks.init({
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
		deadline: {
			type: Sequelize.DATE,
			allowNull: false
		},
		completion: {
			type: Sequelize.DECIMAL
		},
		note: {
			type: Sequelize.STRING(2000)
		}, 
	}, { sequelize, modelName: "Tasks" });

	Tasks.belongsTo(Users, {as: "user"});
	Tasks.belongsTo(Courses, {as: "course"});
}

