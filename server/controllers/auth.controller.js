const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import Auth secret
const secret = process.env.AUTH_SECRET

// import model
const User = require("../models/Users.model").Model;

// instantiate model
const controller = [];

controller.signup = (req, res, next) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    const user = new User({
        "name.first": req.body.fname,
        "name.last": req.body.lname,
        "email.address": req.body.email,
        "password": hashedPassword
    });

    user.save()
    .then(newUser => {
        const token = jwt.sign({ id: userId }, secret, {
            expiresIn: 86400 // one day
        });

        res.status(201).json({
            auth: true, 
            token,
            newUser
        });

        next();
    })
    .catch(err => {
        return res.status(500).json({
            auth: false,
            message: err.message || "An error occured while processing your request"
        });
    });
}

controller.signin = (req, res, next) => {
    // if(!req.header("x-auth-token")) {
    //     return res.status(400).json({
    //         message: "There is no token for user authentication"
    //     });
    // } else {
    //     res.status(201).json({
    //         message: "Login sucessful"
    //     });
    // }
    // next(); BradTraversy

    User.findOne({ "email.address": req.body.email })
    .then(user => {
        if(!user) {
            return res.status(404).json({
                auth: false,
                message: "This user wasn't found"
            })
        } else {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            const token = jwt.sign({ id: user._id }, secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({
                auth: true, 
                token,
                user
            });

            next();
        }
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred while processing your request"
        })
    });
}

controller.signout = (req, res, next) => {
    return res.status(200).json({
        auth: false,
        message: "You have successfully logged out",
        token: null
    });  
}

module.exports = controller;