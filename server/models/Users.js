module.exports = (models, Sequelize) => {
	const Users = models.define("Users", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		isBetaMember: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
			allowNull: false
		},
		firstName: {
			type: Sequelize.STRING(25),
			allowNull: false
		},
		lastName: {
			type: Sequelize.STRING(25),
			allowNull: false
		},
		password: {
			type: Sequelize.STRING(25),
			allowNull: false
		},
		passwordChange: {
			type: Sequelize.STRING(25)
		},
		email: {
			type: Sequelize.STRING(50),
			allowNull: false
		}, 
		country: {
			type: Sequelize.STRING(50)
		}, 
		region: {
			type: Sequelize.STRING(50)
		},
		institution: {
			type: Sequelize.STRING(100)		   
		}
	}, {});	

	return Users;
}