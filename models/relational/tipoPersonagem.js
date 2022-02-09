/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 25/11/21
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


module.exports = (sequelize, DataTypes) => {
    
    const tipoPersonagem = sequelize.pool.define('tipoPersonagem', {
        nome:  DataTypes.STRING
    }, 
    {
        freezeTableName: true,
        tableName: 'tipoPersonagem'
    })

    return tipoPersonagem
}