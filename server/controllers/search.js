const { check, validationResult, filter } = require("express-validator");

exports.index = function(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

    } else {
        
    }
}