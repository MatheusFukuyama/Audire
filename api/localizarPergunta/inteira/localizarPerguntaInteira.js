/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 03/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')
const similaridade = require('jaro-winkler')

const procurarResposta = require('../../localizarResposta/localizaRespostaId')

const options = {
    protocol: 'https',
    host: '127.0.0.1',
    port: 8000
}


// async function perguntaContexto(pergunta, )

module.exports = async(pergunta, contextoId, res) => {

    const baseUrlPerguntaContexto = 'localhost:8000/rest/perguntasContextos'
    const baseUrlPergunta = 'localhost:8000/rest/perguntas'
    const baseUrlResposta = 'localhost:8000/rest/respostasContextos'

    try {
        const { data } = await axios.get( baseUrlPergunta, { proxy: options})
        let encontrado = false

        data.forEach(perguntaEnsinada => {
            if(perguntaEnsinada.enunciado === pergunta && !encontrado) {
                if(procurarResposta(perguntaEnsinada.id, contextoId, res)){
                    encontrado = true
                }
            }    
        });

        if(!encontrado){
            let maiorSimilaridade = 0
            let similar
            let perguntaEncontrada
            data.forEach(perguntaEnsinada => {
                similar = similaridade(perguntaEnsinada.enunciado, pergunta)
                if( similar >= .9) {
                    if(similar > maiorSimilaridade){
                        maiorSimilaridade = similar 
                        perguntaEncontrada = perguntaEnsinada
                    }
                }
            })  

            procurarResposta(pergunta.id, contextoId, res)
            
        }

    } catch(err) {
        console.error(err)
        return err
    }
}
