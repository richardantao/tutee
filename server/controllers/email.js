// import nodemailer model
const Email = require("../models/Email");
// import validation
const { check, validationResult, filter } = require("express-validator");

// POST /beta form to email
exports.beta = (req, res) => {
    const errors = validationResult(req);

    // check form fields 
    check("betaName").exists().isAlphanumeric();
    check("betaEmail").exists().isEmail();

    // filter form fields
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

// POST /contact form to email
exports.contact = (req, res) => {
    const errors = validationResult(req);

    // check form fields
    check("name").exists().isAlphanumeric();
    check("email").isEmail();
    check("message").exists().isAlphanumeric();


    // filter form fields
    filter("name").escape();
    filter("email").escape();
    filter("message").escape();


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

// POST visual designer application to email
exports.designerApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check form fields
    check("firstName").exists().isAlpha();
    check("lastName").exists().isAlpha();
    check("email").isEmail();
    check("phone").exists().isNumeric();
    check("dob").exists(); // check for isDate() method

    // filter form fields
    filter("firstName").escape();
    filter("lastName").escape();
    filter("email").escape();
    filter("phone").escape();
    filter("dob").escape();

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

// post frontend react dev app to email
exports.frontendApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check form fields 
    check("firstName").exists().isAlpha();
    check("lastName").exists().isAlpha();
    check("email").isEmail();
    check("phone").exists().isNumeric();
    check("dob").exists(); // check for isDate() method

    // filter form fields
    filter("firstName").escape();
    filter("lastName").escape();
    filter("email").escape();
    filter("phone").escape();
    filter("dob").escape();

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

// POST backend node dev app to email
exports.backendApp = (req, res) => {
    const errors = validationResult(req);

    // check form fields 
    check("firstName").exists().isAlpha();
    check("lastName").exists().isAlpha();
    check("email").isEmail();
    check("phone").exists().isNumeric();
    check("dob").exists(); // check for isDate() method

    // filter form fields
    filter("firstName").escape();
    filter("lastName").escape();
    filter("email").escape();
    filter("phone").escape();
    filter("dob").escape();

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

// POST mobile swift dev app to email
exports.swiftApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check form fields 
    check("firstName").exists().isAlpha();
    check("lastName").exists().isAlpha();
    check("email").isEmail();
    check("phone").exists().isNumeric();
    check("dob").exists(); // check for isDate() method

    // filter form fields
    filter("firstName").escape();
    filter("lastName").escape();
    filter("email").escape();
    filter("phone").escape();
    filter("dob").escape();

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

// POST marketing speicialist app to email
exports.marketerApp = (req, res) => {
    const errors = validationResult(req);
    const confirmation = "Your application has been successfully submitted";

    // check form fields 
    check("firstName").exists().isAlpha();
    check("lastName").exists().isAlpha();
    check("email").isEmail();
    check("phone").exists().isNumeric();
    check("dob").exists(); // check for isDate() method

    // filter form fields
    filter("firstName").escape();
    filter("lastName").escape();
    filter("email").escape();
    filter("phone").escape();
    filter("dob").escape();

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
