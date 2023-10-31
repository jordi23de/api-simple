const { createPool } = require('mysql2/promise')
const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = require('./config.js')

const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

module.exports = pool