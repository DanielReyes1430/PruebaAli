const mysql = require('mysql')

const config = {
    host: 'localhost',
    user: 'user.nodejs',
    database: 'estancia',
    password: 'IvE1357Nd!'
}

const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports = conn;
