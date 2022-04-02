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
    
        perguntaRaiz: {
            type: DataTypes.INTEGER,
            references: {
              model: "pergunta",
              key: "id",
              allowNull: true
            } 
        },

        criadorId: {
            type: DataTypes.INTEGER,
            references: {
              model: "criador",
              key: "id"
            } 
        },
    
    }, 
    {
        freezeTableName: true,
        tableName: 'pergunta'
    })

    return pergunta
}