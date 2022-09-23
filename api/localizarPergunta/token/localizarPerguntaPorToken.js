/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 22/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')
const similaridade = require('jaro-winkler')

const preProcessamentoFuncao = require('../../preprocessamento/preProcessamentoFuncao')
const procurarPerguntaPorTokenContido = require('./procurarPerguntaPorTokenContido')
const procurarPerguntaPorTokenTaxa = require('./procurarPerguntaPorTokenTaxa')
const procurarPerguntaPorTokenExclusivo = require('./procurarPerguntaPorTokenExclusivo')

module.exports = async(pergunta, contextoId, res, token) => {
    
    const perguntaLimpa = await preProcessamentoFuncao(pergunta, token)
    const baseUrlPergunta = 'localhost:8000/rest/perguntas'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    try {
        
        const { data } = await axios.get( baseUrlPergunta, { proxy: options, headers: { 'Authorization': token }})
        let encontrado = false;

        data.forEach(perguntaEnsinada => {
            if(perguntaEnsinada.enunciadoLimpo === perguntaLimpa) {   
                // procurarResposta(baseUrlResposta, options, data[0].id, contextoId, res)
                perguntaEncontrada = perguntaEnsinada
                perguntaEncontrada.encontrado = true
            }
        });

        
        let maiorSimilaridade = 0;
        let perguntaEncontrada = {}
        let similar = 0
        if(!encontrado) {
            data.forEach(perguntaEnsinada => {
                similar = similaridade(perguntaEnsinada.enunciadoLimpo, perguntaLimpa)
                
                if( similar > 0.9) {
                    
                    if(similar > maiorSimilaridade){
                        maiorSimilaridade = similar
                        perguntaEncontrada = perguntaEnsinada
                        perguntaEncontrada.encontrado = true
                    }
                    
                }
            });

            if(perguntaEncontrada.encontrado) {
                perguntaEncontrada.metodo = 'localizarPerguntaToken'
                return perguntaEncontrada
            } else {    
                perguntaEncontrada = await procurarPerguntaPorTokenContido(pergunta, contextoId, res, token)
                if(perguntaEncontrada.encontrado){
                    perguntaEncontrada.metodo = 'procurarPerguntaPorTokenContido'
                    return perguntaEncontrada
                } else {
                    perguntaEncontrada = await procurarPerguntaPorTokenExclusivo(pergunta, contextoId, res, token)
                    if(perguntaEncontrada.encontrado){
                        perguntaEncontrada.metodo = 'procurarPerguntaPorTokenExclusivo'
                        return perguntaEncontrada
                    } else {
                        perguntaEncontrada = await procurarPerguntaPorTokenTaxa(pergunta, contextoId, res, token)
                        if(perguntaEncontrada.encontrado){
                            perguntaEncontrada.metodo = 'procurarPerguntaPorTokenTaxa'
                            return perguntaEncontrada
                        }
                    }
                }
            }
        }
            
    } catch(err) {
        console.error(err)
        return err
    }
}
