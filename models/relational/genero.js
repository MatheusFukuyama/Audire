/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 07/02/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const genero = sequelize.pool.define('genero', {
        nome:  DataTypes.STRING
    }, 
    {
        freezeTableName: true,
        tableName: 'genero'
    })

    return genero
}