/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

module.exports = async(enunciadoLimpo, perguntaId, res) => {

    const baseUrl = 'localhost:8000/rest/perguntaMap'

    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    try {

        const palavras = enunciadoLimpo.split(' ')
        
        palavras.forEach(palavra => {
            axios.post( baseUrl, {
                palavra: palavra,
                perguntaId
            },{
                proxy: options
            }).then (
                msg =>console.log(msg)
            )
     
        });
            
    } catch(err) {
        console.error(err)
        return err
    }
}
