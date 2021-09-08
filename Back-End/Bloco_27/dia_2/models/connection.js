const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'fernando',
    password: 'kq5h096z',
    database: 'cep_lookup' });

module.exports = connection;