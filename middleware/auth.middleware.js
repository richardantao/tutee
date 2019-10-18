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
        try {
        const decoded = jwt.verify(token, secret);
        
        req.user = decoded;
        
        next();
        } catch (e) {
            res.status(400).json({ 
                success: false, 
                message: "Token is not valid" 
            });
        }
    }    
}

module.exports = auth;