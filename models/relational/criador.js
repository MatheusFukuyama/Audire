/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 08/02/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const criador = sequelize.pool.define('criador', {
        nome:  DataTypes.STRING,
        codigo: DataTypes.STRING
    }, 
    {
        freezeTableName: true,
        tableName: 'criador'
    })

    return criador
}