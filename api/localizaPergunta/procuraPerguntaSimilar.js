/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 03/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')
const similaridade = require('jaro-winkler')

async function procurarResposta(baseUrlResposta, options, perguntaId, contextoId, res) {
    try {
        
        const { data } = await axios.get( baseUrlResposta, { proxy: options})

        data.forEach((resposta) => 
        {
            if(resposta.perguntaId === perguntaId && resposta.contextoId == contextoId) {
                res.send(resposta.resposta)
            }
        })

    } catch(err) {
        console.error(err)
        return err
    }
    
}

module.exports = async(pergunta, contextoId, res) => {

    const baseUrlPergunta = 'localhost:8000/rest/perguntas'
    const baseUrlResposta = 'localhost:8000/rest/respostasContextos'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    try {
        const { data } = await axios.get( baseUrlPergunta, { proxy: options})


        if(similaridade(data[0].enunciado, pergunta) >= .9) {   
            procurarResposta(baseUrlResposta, options, data[0].id, contextoId, res)
        } else {
            res.send("não tem resposta")
        }
            
    } catch(err) {
        console.error(err)
        return err
    }
}
