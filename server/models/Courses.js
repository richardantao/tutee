module.exports = (models, Sequelize) => {
	const Courses = models.define("Courses", {
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
	}, {});

	Courses.associate = (models) => {
		Courses.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
		Courses.belongsTo(models.Terms, {
			foreignKey: "termId",
			as: "term"
		});
	}

	return Courses;
}
