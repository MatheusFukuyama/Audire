/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/02/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const comunicacao = sequelize.pool.define('comunicacao', {
        dataInicio:  DataTypes.DATE,
        dataTermino: DataTypes.DATE,

        pessoaId: {
            type: DataTypes.INTEGER,
            references: {
              model: "pessoa",
              key: "id"
            } 
        },

        contextoId: {
            type: DataTypes.INTEGER,
            references: {
              model: "contexto",
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
        tableName: 'comunicacao'
    })

    return comunicacao
}