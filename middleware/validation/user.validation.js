const { check, filter, validationResult } = require("express-validator");

// instantiate validation 
const validate = [];

validate.updateProfile = (req, res, next) => {
    const errors = validationResult(req);
    
    check("fname").isAlpha();
    check("lname").isAlpha();
    check("email").isEmail();
    check("country").isAlpha();
    check("region").isAlpha();
    check("institution").isAlpha();
    check("school").isAlpha();

    filter("fname").escape();
    filter("lname").escape();
    filter("email").escape().normalizeEmail();
    filter("country").escape();
    filter("region").escape();
    filter("institution").escape();
    filter("school").escape();

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

validate.deleteProfile = (req, res, next) => {
    const errors = validationResult(req);

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

validate.updatePassword = (req, res, next) => {
    const errors = validationResult(req);

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

validate.updatePreferences = (req, res, next) => {
    const errors = validationResult(req);

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

validate.createIntegration = (req, res, next) => {
    const errors = validationResult(req);

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

validate.updateIntegration = (req, res, next) => {
    const errors = validationResult(req);

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

validate.deleteIntegration = (req, res, next) => {
    const errors = validationResult(req);

    check();

    filter().escape();

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