/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const contexto = sequelize.pool.define('contexto', {
        titulo:  DataTypes.STRING,
        dataCriacao: DataTypes.DATE,

        personagemId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'personagem',
                key: 'id' 
            }
        }
    }, 
    {
        freezeTableName: true,
        tableName: 'contexto'
    })

    return contexto
}