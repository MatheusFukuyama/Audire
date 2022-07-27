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
db.genero = require('./genero.js')(db.mysql,       db.Sequelize);
db.idioma = require('./idioma.js')(db.mysql,       db.Sequelize);
db.caracterEspecial = require('./caracterEspecial.js')(db.mysql,       db.Sequelize);
db.simbolo = require('./simbolo.js')(db.mysql,       db.Sequelize);
db.stopword = require('./stopword.js')(db.mysql,       db.Sequelize);
db.configuracao = require('./configuracao.js')(db.mysql,       db.Sequelize);
db.reducaoLexical = require('./reducaoLexical.js')(db.mysql,       db.Sequelize);
db.acentuacao = require('./acentuacao.js')(db.mysql,       db.Sequelize);
db.pergunta = require('./pergunta.js')(db.mysql,       db.Sequelize);
db.contexto = require('./contexto.js')(db.mysql,       db.Sequelize);
db.perguntaContexto = require('./perguntaContexto.js')(db.mysql,       db.Sequelize);
db.respostaContexto = require('./respostaContexto.js')(db.mysql,       db.Sequelize);
db.perguntaMap = require('./perguntaMap.js')(db.mysql,       db.Sequelize);
db.comunicacao = require('./comunicacao.js')(db.mysql,       db.Sequelize);
db.dialogo = require('./dialogo.js')(db.mysql,       db.Sequelize);
db.dialogoMap = require('./dialogoMap.js')(db.mysql,       db.Sequelize);
db.estrategia = require('./estrategia.js')(db.mysql,       db.Sequelize);
db.pessoa = require('./pessoa.js')(db.mysql,       db.Sequelize);
db.mysql.pool.sync({alter:true});

module.exports = db; 
