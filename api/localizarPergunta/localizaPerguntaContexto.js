/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 03/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data
const axios = require('axios')

    const baseUrl = 'localhost:8000/rest/perguntasContextos'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

module.exports = async(perguntaId, contextoId, res, token) => {

    try {
        let perguntaContextoEncontrado = {}
        let encontrado = false

        const { data } = await axios.get(baseUrl, { proxy: options, headers: {'Authorization': token} })

        data.forEach(perguntaContexto => {
            
            if(perguntaContexto.perguntaId == perguntaId && perguntaContexto.contextoId == contextoId){
                encontrado = true
                perguntaContextoEncontrado.id = perguntaContexto.id
            }
        })

        if(encontrado) {
            perguntaContextoEncontrado.encontrado = true
        } else {
            perguntaContextoEncontrado.encontrado = false
        }
        
        return perguntaContextoEncontrado

    } catch(err) {
        console.error(err)
        return err
    }
}
