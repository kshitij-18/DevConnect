const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // Get token header
    const token = req.header('x-auth-token');

    // Check if token is there or not
    if (!token) {
        return res.status(401).json({ msg: "Token not avilable access denied" })
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" })
    }
}

module.exports = verifyToken;