/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const respostaContexto = sequelize.pool.define('respostaContexto', {
        resposta:  DataTypes.STRING,
        ordem:     DataTypes.INTEGER,
        
        perguntaContextoId: {
            type: DataTypes.INTEGER,
            references: {
              model: "perguntaContexto",
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
        tableName: 'respostaContexto'
    })

    return respostaContexto
}