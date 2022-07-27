/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const dialogoMap = sequelize.pool.define('dialogoMap', {
        palavra:       DataTypes.STRING,

        dialogoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dialogo',
                key: 'id' 
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
        tableName: 'dialogoMap'
    })

    return dialogoMap
}