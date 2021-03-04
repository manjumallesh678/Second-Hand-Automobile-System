const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Manjurocky1',
    database : 'automobiles',
});

module.exports = db;