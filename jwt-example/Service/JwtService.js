const jwt = require("jsonwebtoken");

const jwtService = {
    generateToken: function(data) {
        try {
            return jwt.sign(data, process.env.JWT_SECRET_KEY, {
                algorithm: process.env.JWT_ALGORITHM,
                expiresIn: process.env.JWT_EXPIRY_SECONDS,
            })
        } catch(e) {
            console.log(e)
            return null
        }
    },
    verifyToken: function(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET_KEY)
        } catch(e) {
            console.log(e)
            return {}
        }
    }

}

module.exports = jwtService