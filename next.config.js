require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        DATABASE_URL: process.env.DATABASE_URL,
        DATABASE_USER: process.env.DATABASE_USER,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_DIALECT: process.env.DATABASE_DIALECT
    }
}