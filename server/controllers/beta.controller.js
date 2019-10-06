// import model
const Beta = require("../models/Beta.model");

const async = require("async");

// instantiate controller
const controller = [];

controller.edit = (req, res) => {
    Beta.findById(req.params.id)
    .then(selectedBeta => {
        if(!selectedBeta) {
            return res.status(404).json({
                message: ""
            });
        } else {
            return res.json(selectedBeta);
        }
    })
    .catch(err => {
        if(err.kind === "ObjectId") {
            return res.status(404).json({
                message: ""
            });
        } else {
            return res.status(500).json({
                message: err.message || "An error occured while retrieving your Beta account"
            });
        }
    })
}

controller.create = (req, res) => {
    async.series({
        user: (callback) => {
        
        },
        beta: (callback) => {
            const beta = new Beta({
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
                        isBeta: true,
                        membership: "Beta",
                        createdAt: Date.now(),
                        updatedAt: Date.now()
                    }
                }
            });
        
            beta.save()
            .then(newBeta => {
                return res.json(newBeta);
            })
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured while creating your Beta account" 
                });
            });
        }
    });
}

controller.update = (req, res) => {
    Beta.findByIdAndUpdate(req.params.id, {
        
    })
    .then(updatedBeta => {
        if(!updatedBeta) {
            return res.status(404).json({
                message: "The server was unable to successfully find your Beta account"
            });
        } else {

        }    
    })
    .catch(err => {
        if(err.kind === "ObjectId") {
            return res.status(404).json({
                message: "The server was unable to successfully find your Beta account"
            });
        } else {
            return res.status(500).json({
                message: err.message || "An error occured while updating your Beta account"
            }); 
        }
    });
}

controller.delete = (req, res) => {
    Beta.findByIdAndDelete(req.params.id)
    .then(deletedBeta => {
        if(!deletedBeta) {
            return res.status(404).json({
                message: ""
            });
        } else {
            return res.json(deletedBeta);
        }
     })
    .catch(err => {
        if(err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).json({
                message: ""
            });
        } else {
            return res.status(500).json({
                message: err.message || "An error occured while deleting your Beta account"
            });
        }
    });
}

module.exports = controller;