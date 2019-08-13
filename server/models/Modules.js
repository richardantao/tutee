module.exports = (models, Sequelize) => {
	const Modules = models.define("Modules", {
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
	}, {});

	Modules.associate = (models) => {
		Modules.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
		Modules.belongsTo(models.Courses, {
			foreignKey: "courseId",
			as: "course"
		});
	}

	return Modules;
}
