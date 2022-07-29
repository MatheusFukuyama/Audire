/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 22/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')
const similaridade = require('jaro-winkler')

const procurarResposta = require('../../localizarResposta/localizaRespostaId')
const preProcessamentoFuncao = require('../../preprocessamento/preProcessamentoFuncao')

module.exports = async(pergunta, contextoId, res) => {

    const perguntaLimpa = await preProcessamentoFuncao(pergunta)
    const tokens = perguntaLimpa.split(' ')
    
    
    const baseUrlPergunta = 'localhost:8000/rest/perguntas'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    try {
        const { data } = await axios.get( baseUrlPergunta, { proxy: options})
       
        let posicaoPalavra
        let resultado
        let perguntaEncontrada = {}

        data.forEach(pergunta => {
            resultado = pergunta.enunciadoLimpo.split(' ')
            tokens.forEach(token => {
                if(pergunta.enunciadoLimpo.split(' ').includes(token)) {
                    posicaoPalavra = resultado.indexOf(token)
                    resultado.splice(posicaoPalavra, 1)
                }
                
                if(resultado.length == 0) {
                    perguntaEncontrada = pergunta
                    perguntaEncontrada.encontrado = true
                    return perguntaEncontrada
                }

            })
        })

        data.forEach(pergunta => {
            resultado = pergunta.enunciadoLimpo.split(' ')
            tokens.forEach(token => {
                pergunta.enunciadoLimpo.split(' ').forEach( palavra => {
                    if(similaridade(palavra, token) > 0.9) {
                        posicaoPalavra = resultado.indexOf(token)
                        resultado.splice(posicaoPalavra, 1)
                    }
                })
                
                if(resultado.length == 0) {
                    perguntaEncontrada = pergunta
                    perguntaEncontrada.encontrado = true
                    return perguntaEncontrada
                }

            })
        })
        
        perguntaEncontrada.encontrado = false
        return perguntaEncontrada
            
    } catch(err) {
        console.error(err)
        return err
    }
}
