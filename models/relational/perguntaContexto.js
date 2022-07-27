/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 14/06/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const perguntaContexto = sequelize.pool.define('perguntaContexto', {

        contextoId: {
            type: DataTypes.INTEGER,
            references: {
              model: "contexto",
              key: "id"
            } 
        },

        perguntaId: {
            type: DataTypes.INTEGER,
            references: {
              model: "pergunta",
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
        tableName: 'perguntaContexto'
    })

    return perguntaContexto
}