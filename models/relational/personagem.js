/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/11/2021
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
*/

'use strict'

module.exports = (sequelize, DataTypes) => {  

    const Personagem = sequelize.pool.define('personagem', {
        primeiroNome:     DataTypes.STRING,
        nomeMeio:         DataTypes.STRING,
        ultimoNome:       DataTypes.STRING,
        nomeCurto:        DataTypes.STRING,
        dataCriacao:      DataTypes.STRING,
        visibilidade:     DataTypes.STRING,
      
        tipoPersonagemId: {
            type: DataTypes.INTEGER,
            references: {
              model: "tipoPersonagem",
              key: "id"
            } 
        },

        generoId: {
          type: DataTypes.INTEGER,
          references: {
            model: "genero",
            key: "id"
          } 
      },
      
      criadorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "criador",
          key: "id"
        } 
    }

      },
      {
        freezeTableName: true,
        tableName: 'personagem',
        timestamps: false
      }  
    );
    
    return Personagem;

};