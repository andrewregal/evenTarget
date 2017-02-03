var mysql = require('mysql');
var LocalStrategy = require('passport-local').Strategy;

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'evenTarget'
});
