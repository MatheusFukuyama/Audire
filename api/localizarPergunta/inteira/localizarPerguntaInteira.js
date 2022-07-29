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
        let maiorSimilaridade = 0
        let similar
        let perguntaEncontrada = {}

        data.forEach(perguntaEnsinada => {
            if(perguntaEnsinada.enunciado === pergunta && !encontrado) {
                encontrado = true
                perguntaEncontrada = perguntaEnsinada
            }    
        });

        if(!encontrado){
            data.forEach(perguntaEnsinada => {
                similar = similaridade(perguntaEnsinada.enunciado, pergunta)
                if( similar >= .9) {
                    if(similar > maiorSimilaridade){
                        maiorSimilaridade = similar 
                        perguntaEncontrada = perguntaEnsinada
                        encontrado = true
                    }
                }
            })
        }

        if(encontrado) {
            perguntaEncontrada.encontrado = true
            perguntaEncontrada.metodo = 'localizarPerguntaInteira'
            return perguntaEncontrada
        } else {
            perguntaEncontrada.encontrado = false
            return perguntaEncontrada
        }


    } catch(err) {
        console.error(err)
        return err
    }
}
