/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const respostaContexto = sequelize.pool.define('respostaContexto', {
        resposta:  DataTypes.TEXT,
        ordem:     DataTypes.INTEGER,
        
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
        }
    }, 
    {
        freezeTableName: true,
        tableName: 'respostaContexto'
    })

    return respostaContexto
}