module.exports = (models, Sequelize) => {
	const Evalus = models.define("Evalus", {
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
	}, {});

	Evalus.associate = (models) => {
		Evalus.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
		Evalus.belongsTo(models.Courses, {
			foreignKey: "courseId",
			as: "course"
		});
	}

	return Evalus;
}
