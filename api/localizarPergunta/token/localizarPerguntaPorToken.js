/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 22/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

const procurarResposta = require('../../localizarResposta/localizaRespostaId')
const preProcessamentoFuncao = require('../../preprocessamento/preProcessamentoFuncao')
const procurarPerguntaPorTokenContido = require('./procurarPerguntaPorTokenContido')
const similaridade = require('jaro-winkler')
const procurarPerguntaPorTokenTaxa = require('./procurarPerguntaPorTokenTaxa')

module.exports = async(pergunta, contextoId, res) => {
    
    const perguntaLimpa = await preProcessamentoFuncao(pergunta)
    console.log(perguntaLimpa)
    const baseUrlPergunta = 'localhost:8000/rest/perguntas'
    const baseUrlResposta = 'localhost:8000/rest/respostas'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    try {
        
        const { data } = await axios.get( baseUrlPergunta, { proxy: options})
        let encontrado = false;

        data.forEach(perguntaEnsinada => {
            if(perguntaEnsinada.enunciadoLimpo === perguntaLimpa) {   
                // procurarResposta(baseUrlResposta, options, data[0].id, contextoId, res)
                encontrado = true;
                res.send(perguntaEnsinada)
            }
        });

        
        let maiorSimilaridade = 0;
        let perguntaEncontrada
        let similar = 0
        if(!encontrado) {
            data.forEach(perguntaEnsinada => {
                similar = similaridade(perguntaEnsinada.enunciadoLimpo, perguntaLimpa)
                
                if( similar > 0.9) {
                    
                    if(similar > maiorSimilaridade){
                        maiorSimilaridade = similar
                        perguntaEncontrada = perguntaEnsinada
                    }
                    
                }
            });

            if(perguntaEncontrada) {
                // procurarResposta(baseUrlResposta, options, data[0].id, contextoId, res)
                encontrado = true;
                res.send(pergunta)
            } if(!encontrado){    
                if(await procurarPerguntaPorTokenContido(pergunta, contextoId, res)){
                    encontrado = true
                }

                console.log(encontrado)
            } if(!encontrado){
                if( await procurarPerguntaPorTokenTaxa(pergunta, contextoId, res)) {
                    encontrado = true
                }
            }
        }
            
    } catch(err) {
        console.error(err)
        return err
    }
}
