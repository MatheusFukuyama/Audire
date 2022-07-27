/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 03/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

const options = {
    protocol: 'https',
    host: '127.0.0.1',
    port: 8000
}



async function perguntaContextoResposta(perguntaContextoId, perguntaId, contextoId) {
    const baseUrlPerguntaContexto = `localhost:8000/rest/perguntaContexto/${perguntaContextoId}`
    
    let encontrado = false
    
    const { data } = await axios.get( baseUrlPerguntaContexto, { proxy: options})
    
    if(data[0]) {
        console.log(data[0].perguntaId, perguntaId, data[0].contextoId, contextoId)
        if(data[0].perguntaId === perguntaId && data[0].contextoId == contextoId) {       
            encontrado = true
        }
    }
        
    return encontrado
}


module.exports = async function procurarResposta(perguntaId, contextoId, res) {
    const baseUrlRespostaContexto = 'localhost:8000/rest/respostasContextos'

    let encontrado = false

    try {
        const { data } = await axios.get( baseUrlRespostaContexto, { proxy: options})
        
        
        data.forEach(async (resposta) => 
        {   
            encontrado = await perguntaContextoResposta(resposta.perguntaContextoId, perguntaId, contextoId)
            if(encontrado) {
                // console.log(resposta.resposta, 1)
            }
        })

        return encontrado

    } catch(err) {
        console.error(err)
        return err
    }
    
}
