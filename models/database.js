/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for define database

 * dataBaseType
 * 1 - MySQL
 * 2 - Firebase
 */


function DataBase() {
   
    this.getDataBase = 
    function (dataBaseType) {    
          return new Promise(function (resolve, reject) {
              if   (dataBaseType == 1) {
                    var db          = require('../models/relational/db.js');
                    resolve(db);
                  }
              else if   (dataBaseType == 2) {
                          var db          = require('../models/firebase/db.js');
                          resolve(db);
                  }
                   else {
                       reject();
                   }
        }); // fim return new Promise(function (resolve, reject) {
    }; // fim function (initials) {
   
    
   }
   
   module.exports = DataBase;
   