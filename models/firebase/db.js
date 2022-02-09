/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
*/

const firebase = require('../../connections/firebase/FirebaseConnect');
/*
var   db  = firebase.database();
var   ref = db.ref("sobra/secret_document");
*/

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};
db.firebase = firebase.firebase.database();
db.ref = db.firebase.ref("sobra/secret_document");

//Models/tables
db.region = require('./region.js')(db.ref); 
db.state  = require('./state.js')(db.ref); 
db.city   = require('./city.js')(db.ref); 

module.exports = db; 