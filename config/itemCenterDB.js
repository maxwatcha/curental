const mysql = require("mysql");

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Indyslum54',
    database: 'cu_rental'
});

module.exports = connection;