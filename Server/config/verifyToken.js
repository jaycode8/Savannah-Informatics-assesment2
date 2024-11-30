const jwt = require("jsonwebtoken");
const jwtKey = process.env.secret;

const verifyToken = async (req, res, next) => {
    let accessToken = req.headers['authorization']?.split(" ")[1];
    try {
        if (!accessToken || accessToken.length < 5) {
            return res.status(401).json({ success: false, msg: "please sign in first" });
        } else {
            const validateToken = await jwt.verify(accessToken, jwtKey);
            if (validateToken) {
                req.authenticated = true;
                req.id = validateToken;
                return next();
            }
        }
    } catch (error) {
        return res.status(401).json({ success: false, msg: "invalid or expired token" });
    }
};

module.exports = verifyToken;
