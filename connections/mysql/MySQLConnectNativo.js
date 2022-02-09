
/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: establish Mysql Connection.
*/
// establish Mysql Connection.
var mysql = require('mysql');

function MySQLConnect() {
  
  this.pool = null;
  
  // Init MySql Connection Pool
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host     : 'ghelt.com.br',
      port     :  3306,
      user     : 'gheltco_desenv',
      password : 'minhasenhaquerida',
      database : 'gheltco_sobra'
    });
  };

  // acquire connection and execute query on callbacks
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new MySQLConnect();