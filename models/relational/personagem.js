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
        nome:             DataTypes.STRING,

        generoId: {
          type: DataTypes.INTEGER,
          references: {
            model: "genero",
            key: "id"
          } 
        },

        pessoaId: {
          type: DataTypes.INTEGER,
          references: {
            model: "pessoa",
            key: "id"
          } 
        },

        created_at: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.pool.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        },

        updated_at: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.pool.literal('CURRENT_TIMESTAMP'),
          allowNull: false
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