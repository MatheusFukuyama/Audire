/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const pergunta = sequelize.pool.define('pergunta', {
        enunciado:  DataTypes.TEXT,
        tipo: DataTypes.STRING,
        enunciadoLimpo: DataTypes.TEXT,
        chamada: DataTypes.INTEGER,
    
        perguntaRaiz: {
            type: DataTypes.INTEGER,
            references: {
              model: "pergunta",
              key: "id",
              allowNull: true
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
        tableName: 'pergunta'
    })

    return pergunta
}