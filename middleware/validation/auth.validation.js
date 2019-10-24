const { check, sanitize, validationResult } = require("express-validator"); 

// instantiate validation 
const validate = [];

validate.user = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(401).json({
            message: "Validation failed, please try again",
            errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        });
        next();
    };
};

validate.application = (req, res, next) => {
    const errors = validationResult(req);

    check("");
    
    sanitize("");

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        })
        next();
    };
};

validate.contact = (req, res, next) => {
    const errors = validationResult(req);

    check("name").isAlpha();
    check("email").isEmail();
    check("message").isAlphaNumeric();

    sanitize("name").escape();
    sanitize("email").escape().normalizeEmail();
    sanitize("message").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        })
        next();
    };
};

validate.invite = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        })
        next();
    };
};

validate.register = (req, res, next) => {
    const errors = validationResult(req);

    check("fname").isAlpha("Your first name can only contain letters").isLength({min: 1}).withMessage("Please enter your first name");
    check("lname").isAlpha("Your last name can only contain letters").isLength({min: 1}).withMessage("Please enter your last name");;    
    check("email").isEmail("You must input a valid email").isLength({min: 1}).withMessage("Please enter your email");;
    check("password").isLength({min: 6}).withMessage("You password must be at least 6 characters");

    sanitize("fname").escape();
    sanitize("lname").escape();
    sanitize("email").escape().normalizeEmail();
    sanitize("password").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
        });
    } else {
        // res.status(200).json({
        //     message: "Validation successful",
        //     errors: null
        // });
        next();
    };
};

validate.signin = (req, res, next) => {
    const errors = validationResult(req);

    check("email").isEmail();
    check("password");

    sanitize("email").normalizeEmail().escape();
    sanitize("password").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        })
        next();
    };
};

validate.signout = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        })
        next();
    };
};

module.exports = validate;