/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 26/02/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const reducaoLexical = sequelize.pool.define('reducaoLexical', {
        palavra:  DataTypes.STRING,

        radical: {
            type: DataTypes.INTEGER,
            references: {
              model: "reducaoLexical",
              key: "id",
              allowNull: true
            }
        },

        idiomaId: {
            type: DataTypes.INTEGER,
            references: {
              model: "idioma",
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
        tableName: 'reducaoLexical'
    })

    return reducaoLexical
}