module.exports = (models, Sequelize) => {
	const Tasks = models.define("Tasks", {
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
	}, {});

	Tasks.associate = (models) => {
		Tasks.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
		Tasks.belongsTo(models.Courses, {
			foreignKey: "courseId",
			as: "course"
		});
	}
	
	return Tasks;
}

