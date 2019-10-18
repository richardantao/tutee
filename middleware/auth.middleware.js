const jwt = require("jsonwebtoken");
const secret = process.env.AUTH_SECRET;

function auth(req, res, next) {
    const token = req.header("x-auth-token");
    
    if(!token) {
        return res.status(401).json({
            success: false,
            message: "No token, authorization denied"
        });
    } else {
        // pass secret here
        const decoded = jwt.verify(token, secret);

        req.user = decoded;
        next();
    }
}

module.exports = auth;