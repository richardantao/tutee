// import database
const database = require("../config/config");

// instantiate models
const Integrations = [];

Integrations.findById = (req) => {
    let userId = req.params.UserId;

    return database.query(
        `SELECT * FROM Integrations
        WHERE UserId = ${userId}`        
    )
}

Integrations.create = (req) => {
    let userId = req.params.UserId;

    return database.query(
        `INSERT INTO Integrations
        (UserId,)
        VALUES (${userId})`        
    )
}

Integrations.update = (req) => {
    let userId = req.params.UserId;

    return database.query(
        `UPDATE Integrations
        SET
        
        WHERE UserId = ${userId}`        
    )
}

Integrations.delete = (req) => {
    let userId = req.params.UserId;

    return database.query(
        `DELETE FROM Integrations
        WHERE UserId = ${userId}`        
    )
}
