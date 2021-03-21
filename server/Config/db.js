const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'kalla',
    database : 'automobiles',
});

module.exports = db;