const { check, filter, validationResult } = require("express-validator");

// instantiate validation
const validate = [];

validate.create = (req, res, next) => {
    const errors = validationResult(req);
    
    check("");
    check("");
    check("");
    check("");

    filter("").escape();
    filter("").escape();
    filter("").escape();
    filter("").escape();

    if(!errors.isEmpty()) {
        return res.status().json({
            message: "Validation failed. Please try again",
            errors: errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        });

        next();
    }
}

validate.update = (req, res, next) => {
    const errors = validationResult(req);
    
    check("");
    check("");
    check("");
    check("");

    filter("").escape();
    filter("").escape();
    filter("").escape();
    filter("").escape();

    if(!errors.isEmpty()) {
        return res.status().json({
            message: "Validation failed. Please try again",
            errors: errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        });

        next();
    }
}

validate.delete = (req, res, next) => {
    const errors = validationResult(req);
    
    check("");

    filter("").escape();

    if(!errors.isEmpty()) {
        return res.status().json({
            message: "Validation failed. Please try again",
            errors: errors
        });
    } else {
        res.status(200).json({
            message: "Validation successful",
            errors: null
        });

        next();
    }
}

module.exports = validate;