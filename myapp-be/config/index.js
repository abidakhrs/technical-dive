require('dotenv').config()

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
    PORT: process.env.PORT || 4000
  }