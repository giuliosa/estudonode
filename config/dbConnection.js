var mysql = require('mysql');

module.exports = function() {
  return mysql.createConnection({
    host : 'localhost',
    user : 'preservtec',
    password : 'ptdl2008',
    database : 'portal_noticias'
  });

}
