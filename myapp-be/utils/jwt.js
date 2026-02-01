const jwt = require("jsonwebtoken")
const { JWT_SECRET, ACCESS_TOKEN_EXPIRY } = require("../config")

// Create token
function createToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY })
}

// Verify token
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (err) {
    return null
  }
}

module.exports = { createToken, verifyToken }
