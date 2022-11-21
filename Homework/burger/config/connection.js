const mysql = require('mysql');

//Create MySQL conection for deployment and local development
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //DB Connection for development
  connection = mysql.createConnection({
    port:3306,
    host: '127.0.0.1',
    user: 'root',
    password: 'MhAlL#15091321',
    database: 'burgers_db'
  })
};

// Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
      console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
  });
  
  // Export connection
  module.exports = connection;