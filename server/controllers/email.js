// import nodemailer model
const Email = require("../models/Email");

// import validation
const { check, validationResult, filter } = require("express-validator");

// POST /beta form
exports.beta = (req, res) => {
    const errors = validationResult(req);

    // check fields 
    check("betaName").exists().isAlphanumeric();
    check("betaEmail").exists().isEmail();

    // filter fields
    filter("betaName").escape();
    filter("betaEmail").escape();

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        
    }
}

// POST /contact form
exports.contact = (req, res) => {
    const errors = validationResult(req);

    // check fields 

    // filter fields

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        
    }
}

//
exports.designerApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check fields 

    // filter fields

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return res.status(200).json({ message: confirmation});
    }
}

//
exports.frontendApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check fields 

    // filter fields

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return res.status(200).json({ message: confirmation});
    }
}

//
exports.backendApp = (req, res) => {
    const errors = validationResult(req);

    // check fields 

    // filter fields

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return res.status(200).json({ message: confirmation});
    }
}

//
exports.swiftApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check fields 

    // filter fields

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return res.status(200).json({ message: confirmation});
    }
}

// POST /
exports.marketerApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check fields 
    check("").exists();
    

    // filter fields
    filter("").escape();

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return res.status(200).json({ message: confirmation});
    }
}
