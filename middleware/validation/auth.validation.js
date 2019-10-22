const { check, filter, validationResult } = require("express-validator"); 

// instantiate validation 
const validate = [];

validate.user = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(401).json({
            message: ""
        });
    } else {
        res.status(200).json({
            message: "Validation successful"
        });
        next();
    };
};

validate.application = (req, res, next) => {
    const errors = validationResult(req);

    check("");

    filter("");

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors,
            message: "Validation failed. Please try again"
        });
    } else {
        res.status(200).json({
            errors: null,
            message: "Validation successful"
        })
        next();
    };
};

validate.contact = (req, res, next) => {
    const errors = validationResult(req);

    check("name").isAlpha();
    check("email").isEmail();
    check("message").isAlphaNumeric();

    filter("name").escape();
    filter("email").escape().normalizeEmail();
    filter("message").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again"
        });
    } else {
        res.status(200).json({
            errors: null,
            message: "Validation successful"
        })
        next();
    }
}

validate.invite = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again"
        });
    } else {
        res.status(200).json({
            errors: null,
            message: "Validation successful"
        })
        next();
    }
}

validate.register = (req, res, next) => {
    const errors = validationResult(req);

    check("name").isAlpha("Your name can only contain letters");
    check("email").isEmail("You must input a valid email");

    filter("name").escape();
    filter("email").escape().normalizeEmail();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors,
            message: "Validation failed. Please try again"
        });
    } else {
        res.status(200).json({
            errors: null,
            message: "Validation successful"
        })
        next();
    }
}

validate.signin = (req, res, next) => {
    const errors = validationResult(req);

    check("email").isEmail();
    check("password");

    filter("email").escape();
    filter("password").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors,
            message: "Validation failed. Please try again"
        });
    } else {
        res.status(200).json({
            errors: null,
            message: "Validation successful"
        })
        next();
    }
}

validate.signout = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors,
            message: "Validation failed. Please try again"
        });
    } else {
        res.status(200).json({
            errors: null,
            message: "Validation successful"
        })
        next();
    }
}

module.exports = validate;