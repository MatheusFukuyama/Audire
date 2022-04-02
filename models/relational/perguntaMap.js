/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const perguntaMap = sequelize.pool.define('perguntaMap', {
        palavra: DataTypes.STRING,

        perguntaId: {
            type: DataTypes.INTEGER,
            references: {
              model: "pergunta",
              key: "id"
            } 
        },
    
    }, 
    {
        freezeTableName: true,
        tableName: 'perguntaMap'
    })

    return perguntaMap
}