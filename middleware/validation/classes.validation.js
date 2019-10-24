const { check, filter, validationResult } = require("express-validator");

// instantiate middleware
const validate = [];

validate.create = (req, res, next) => {
    const errors = validationResult(req);

    check("");
    check("");

    filter("").escape();
    filter("").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed, please try again",
            errors
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

    filter("").escape();
    filter("").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed, please try again",
            errors
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
    check("");

    filter("").escape();
    filter("").escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed. Please try again",
            errors
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