/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/11/2021
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
*/

'use strict'

//methods for fetching mysql data

const mysql     = require('../../connections/mysql/MySQLConnect');


// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};
db.Sequelize = mysql.Sequelize;
db.mysql     = mysql;

// initialize database connection
db.mysql.init();

//Models/tables
db.personagem = require('./personagem.js')(db.mysql,       db.Sequelize);
db.tipoPersonagem = require('./tipoPersonagem.js')(db.mysql,       db.Sequelize); 
db.genero = require('./genero.js')(db.mysql,       db.Sequelize);
db.criador = require('./criador.js')(db.mysql,       db.Sequelize);
db.idioma = require('./idioma.js')(db.mysql,       db.Sequelize);
db.caracterEspecial = require('./caracterEspecial.js')(db.mysql,       db.Sequelize);
db.simbolo = require('./simbolo.js')(db.mysql,       db.Sequelize);
db.stopword = require('./stopword.js')(db.mysql,       db.Sequelize);
db.configuracao = require('./configuracao.js')(db.mysql,       db.Sequelize);
db.reducaoLexical = require('./reducaoLexical.js')(db.mysql,       db.Sequelize);
db.mysql.pool.sync();

module.exports = db; 
