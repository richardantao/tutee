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
        Email.betaReq()
        .then((msg) => {
            return res.status(200).json(msg);
        })
        .catch(err => {
            return res.status(422).json(err);
        });
        
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
        Email.contactMsg()
        .then(msg => {
            return res.status(200).json(msg); 
        })
        .catch(err => {
            return res.status(422).json(err);
        });
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
        Email.teamApp()
        .then(() => {
            return res.status(200).json({ message: confirmation});
        })
        .catch(err => {
            return res.status(422).json(err);
        });
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
        Email.teamApp()
        .then(() => {
            return res.status(200).json({ message: confirmation});
        })
        .catch(err => {
            return res.status(422).json(err);
        });
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
        Email.teamApp()
        .then(() => {
            return res.status(200).json({ message: confirmation});
        })
        .catch(err => {
            return res.status(422).json(err);
        });
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
        Email.teamApp()
        .then(() => {
            return res.status(200).json({ message: confirmation});
        })
        .catch(err => {
            return res.status(422).json(err);
        });
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
        Email.teamApp()
        .then(() => {
            return res.status(200).json({ message: confirmation});
        })
        .catch(err => {
            return res.status(422).json(err);
        });
    }
}
