const util = require('util');
const mysql = require('mysql');
const { createConnection } = require('net');

const db_connection = mysql.createConnection({
    // Host for Development
    host: "localhost",
    // Port for Development Database
    port: 3306,
    // Database user name
    user: 'root',
    // Database password
    password: "rootroot",
    // Database Name
    database: 'employees'
});

db_connection.connect();

// Adding the ability to use promises instead of callbacks
db_connection.query = util.promisify(db_connection.query);

// Exporting the Database Connection
module.exports = db_connection;