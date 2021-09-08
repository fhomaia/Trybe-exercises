const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'fernando',
  password: 'kq5h096z',
  database: 'rest_exercicios'});

module.exports = connection;