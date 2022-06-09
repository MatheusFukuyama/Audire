/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 09/04/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
*/

'use strict'

module.exports = (sequelize, DataTypes) => {  

    const Pessoa = sequelize.pool.define('pessoa', {
        primeiroNome:     DataTypes.STRING,
        ultimoNome:       DataTypes.STRING,
        dataCriacao:      DataTypes.STRING,
        email:            DataTypes.STRING,
        senha:            DataTypes.STRING
      },
      {
        freezeTableName: true,
        tableName: 'pessoa',
        timestamps: false
      }  
    );
    
    return Pessoa;

};