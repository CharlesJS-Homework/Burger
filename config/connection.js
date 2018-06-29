const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'SammySquirrel',
  database: 'burgers_db',
});

conn.connect((err) => {
  if (err) { throw err; }
});

module.exports = conn;
