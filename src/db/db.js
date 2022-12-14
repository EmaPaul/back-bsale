require('dotenv').config();
const mysql2 = require('mysql2');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE}=process.env;

const mysqlConecction = mysql2.createPool({
    host:DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE
})

module.exports = mysqlConecction.promise();