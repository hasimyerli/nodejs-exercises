const jwt = require("jsonwebtoken");

const jwtSecretKey = "my_secret_key"
const jwtAlgorithm = "HS256"
const jwtExpirySeconds = 300 // expire after 300 seconds

const jwtService = {
    generateToken: function(data) {
        try {
            return jwt.sign(data, jwtSecretKey, {
                algorithm: jwtAlgorithm,
                expiresIn: jwtExpirySeconds,
            })
        } catch(e) {
            return null
        }
    },
    verifyToken: function(token) {
        try {
            return jwt.verify(token, jwtSecretKey)
        } catch(e) {
            console.log(e)
            return {}
        }
    }

}

module.exports = jwtService