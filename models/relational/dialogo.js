/**
 * @author: Helen de Freita Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: methods for fetching mysql data
 * Extraído de https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
 */


 module.exports = (sequelize, DataTypes) => {
    
    const dialogo = sequelize.pool.define('dialogo', {
        dataRealizacao: DataTypes.DATE,
        pergunta:       DataTypes.STRING,
        perguntaLimpa:  DataTypes.STRING,
        resposta:       DataTypes.STRING,

        respostaContextoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'respostaContexto',
                key: 'id' 
            }
        },
        perguntaRaiz: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pergunta',
                key: 'id' 
            }
        },
        perguntaSinonimo: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pergunta',
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
        tableName: 'dialogo'
    })

    return dialogo
}