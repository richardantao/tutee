// import database
const database = require("../config/config");

// instantiate model
const Password = [];

Password.findById = (req) => {
    let userId = req.params.UserId;

    return database.query(
        `SELECT UserPassword FROM Users
        WHERE UserId = ${userId}`
    );
}

Password.update = (req) => {
    let userId = req.params.UserId;
    let userPassword = req.body.UserPassword;

    return database.query(
        `UPDATE Users
        SET
            UserPassword = ${userPassword}
        WHERE UserId = ${userId}`
    );
}