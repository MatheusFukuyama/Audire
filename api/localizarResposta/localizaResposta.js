/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 03/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')
const respostaContexto = require('../../models/relational/respostaContexto')

const baseUrl = 'localhost:8000/rest/respostasContextos'
const options = {
    protocol: 'https',
    host: '127.0.0.1',
    port: 8000
}

module.exports = async function procurarResposta(perguntaContextoId) {



    try {
        let encontrado = false        
        let respostaContextoEncontrado = {
            respostas: []
        }
        
        const { data } = await axios.get( baseUrl, { proxy: options})
        
        data.forEach( respostaContexto => {   
            if(respostaContexto.perguntaContextoId == perguntaContextoId) {
                encontrado = true
                respostaContextoEncontrado.respostas.push(respostaContexto.resposta)
            }
        })

        if(respostaContextoEncontrado.respostas.length > 1) {
            //escolher resposta menos utilizada
        } else {
            respostaContextoEncontrado.respostaEscolhida = respostaContextoEncontrado.respostas[0]
        }


        console.log(respostaContextoEncontrado)
        return 

    } catch(err) {
        console.error(err)
        return err
    }
    
}
