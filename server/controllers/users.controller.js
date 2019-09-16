// import model
const Users = require("../models/Users.model");

// instantiate controller
const controller = [];

controller.edit = (req, res) => {
    Users.findById(req.params.id)
    .then(userInfo => {
        if(!userInfo) {
            res.status(404).json({
                message: "User profile was not found with the id " + req.params.id
            });
        } else {
            return res.json(userInfo);
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "User profile was not found with the id " + req.params.id
            });
        } else {
            res.status(500).json({
                message: "Error retrieving user profile with id " + req.params.id
            });
        }
    });
}

// POST request to create user's account
controller.create = (req, res) => {
	const user = new Users({
        profile: {
            name: {
                first:req.body.firstName,
                last: req.body.lastName
            },
            email: {
                address: req.body.email
            },
            password: req.body.password,
            meta: {
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        }
    });

    user.save()
    .then(newUser => {
        return res.json(newUser);
    })
    .catch(err => {
        console.log("Error occured")
        return res.status(500).json({
            message: err.message || "An error occured while creating your account"
        });
    });
}

// PUT request to update user's account details

/*
Confirm data entries
*/
controller.update = (req, res) => {
    Users.findByIdAndUpdate(req.params.id, {
        $set: {
            profile: {
                name: {
                    first: req.body.firstName,
                    last: req.body.lastName
                },
                email: {
                    address: req.body.email
                }
            },
            meta: {
                updatedAt: Date.now()
            }
        }
    })
    .then(updatedUser => {
        if(!updatedUser) {
            return res.status(404).json({
                message: "The account trying to be updated was not successfully found. Please try again."
            });
        } else {
            return res.json(updatedUser);
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "The account trying to be updated was not successfully found. Please try again."
            });                
        } else {
            return res.status(500).json({
                message: err.message || "An error occured while updating user settings"
            });
        }
    })
}

// DELETE request to delete the user's account
controller.delete = (req, res) => {
    Users.findByIdAndDelete(req.params.id)
    .then(deletedUser => {
        if(!deletedUser) {
            return res.status(404).json({
                message: "The account trying to be deleted was not successfully found"
            });
        } else {
            return res.json(deletedUser);
        }
    })
    .catch(err => {
        if(err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).json({
                message: "The account trying to be deleted was not successfully found"
            })
        } else {
            return res.status(500).json({
                message: err.message || "An error occured when attempting to delete this account"
            })
        }
    });
}

module.exports = controller;