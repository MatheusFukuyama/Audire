/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/02/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const stopword = sequelize.pool.define('stopword', {
        palavra:  DataTypes.STRING,

        idiomaId: {
            type: DataTypes.INTEGER,
            references: {
              model: "idioma",
              key: "id"
            } 
        }
    }, 
    {
        freezeTableName: true,
        tableName: 'stopword'
    })

    return stopword
}