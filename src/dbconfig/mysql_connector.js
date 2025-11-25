const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.db_host,  
    port : process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool.promise();