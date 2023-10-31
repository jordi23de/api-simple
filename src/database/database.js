const { Sequelize } = require("sequelize")
const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = require('../config.js')
const fs = require('fs')
const sslCertPath = `${__dirname}/ca-certificate.crt`;

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync(sslCertPath)
            }
        }
    }
);

module.exports = sequelize