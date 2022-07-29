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
    const baseUrlResposta = 'localhost:8000/rest/respostas'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    try {

        const { data } = await axios.get( baseUrlPergunta, { proxy: options})
       
        let unica = 0
        let perguntaEncontrada = {}
        let tokenEncontrado

        perguntaEncontrada.encontrado = false
        tokens.forEach(token => {
            data.forEach(pergunta => {
                if(pergunta.enunciadoLimpo.includes(token)) {   
                    unica++
                }
            })


            if(unica == 1){
                tokenEncontrado = token

                data.forEach(pergunta => {
                    if(pergunta.enunciadoLimpo.includes(tokenEncontrado) && !perguntaEncontrada.encontrado) {   
                        perguntaEncontrada = pergunta
                        perguntaEncontrada.encontrado = true
                    }
                })

                return perguntaEncontrada

            }
            else {
                unica = 0
            }
        })

        
        tokens.forEach(token => {
            data.forEach(pergunta => {
                pergunta.enunciadoLimpo.split(' ').forEach( palavra =>{
                    if(similaridade(palavra, token) > 0.9){
                        unica++
                    }
                })
            })

            

            if(unica == 1){
                tokenEncontrado = token

                data.forEach(pergunta => {
                    if(pergunta.enunciadoLimpo.includes(tokenEncontrado) && !perguntaEncontrada.encontrado) {   
                        perguntaEncontrada = pergunta
                        perguntaEncontrada.encontrado = true
                    }
                })

                return perguntaEncontrada
            }
            else {
                unica = 0
            }
        })

        return perguntaEncontrada
        

            
    } catch(err) {
        console.error(err)
        return err
    }
}
