// import database
const database = require("../config/config");

// instantiate model
const Users = [];

// GET all users; admin query
Users.findAll = () => {
	return database.query(
		`SELECT * FROM Users`
	);
}

// GET when user opens personal settings page
Users.findById = req => {
	let userId = req.params.id;

	return database.query(
		`SELECT * FROM Users  
		WHERE UserId = ${userId}`
	);
}

// POST to db when user creates a new account
Users.create = req => {
	let created ={
		userFirstName: req.body.userFirstName,
		userLastName: req.body.userLastName,
		userPassword: req.body.userPassword,
		userEmail: req.body.userEmail,
		userCountry: req.body.userCountry,
		userRegion: req.body.userRegion,
		userInstitution: req.body.userInstitution
	}

	return database.query(
		`INSERT INTO Users
		(UserFirstName, UserLastName, UserPassword, UserEmail, UserCountry, UserRegion, UserInstitution)
		VALUES (${created.UserFirstName}, ${created.userLastName}, ${created.userPassword},
			${created.userEmail}, ${created.userCountry}, ${created.userRegion}, ${created.userInstitution})`
	);
}

// PUT when user updates personal data in settings tab
Users.update = req => {
	let userId = req.params.UserId;
	let updated = {
		userFirstName: req.body.UserFirstName,
		userLastName: req.body.UserLastName,
		userEmail: req.body.UserEmail,
		userCountry: req.body.UserCountry,
		userRegion: req.body.UserRegion,
		userInstitution: req.body.UserInstitution
	}

	return database.query(
		`UPDATE Users
		SET
			UserFirstName = ${updated.userFirstName},
			UserLastName = ${updated.userLastName},
			UserEmail = ${updated.userEmail},
			UserCountry = ${updated.userCountry}
			UserRegions = ${updated.userRegion}
			UserInstitution = ${updated.userInstitution}
		WHERE UserId = ${userId}`
	);
}

// DELETE when user deletes account
Users.delete = req => {
	let userId = req.params.userId;
	
	return database.query(
		`DELETE FROM Users
		WHERE UserId = ${userId}`
	);
}

// export model
module.exports = Users;