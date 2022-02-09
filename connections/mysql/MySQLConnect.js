/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: establish Mysql Connection.
*/
// establish Mysql Connection.

function MySQLConnect() {

  this.Sequelize = require('sequelize');

  this.pool      = null;
  
  // Init MySql Connection Pool
  this.init = function() {
    this.pool = new this.Sequelize('gheltco_sobra', 'gheltco_desenv', 'minhasenhaquerida', {
      host:    'ghelt.com.br',
      dialect: 'mysql',
      define: {
        timestamps: false
      },
      pool: {
        max: 10,
        min: 2,
        acquire: 30000,
        idle: 10000
      },
    
      // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
      operatorsAliases: false
    });

    this.pool
      .authenticate()
      .then(() => {
        console.log('Connection with MySQL has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database MySQL:', err);
      });

  };

}

module.exports = new MySQLConnect();