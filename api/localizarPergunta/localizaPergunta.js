/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 03/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data


const localizaPerguntaIntera = require('./inteira/localizarPerguntaInteira')
const localizaPerguntaPorToken = require('./token/localizarPerguntaPorToken')
const localizaPerguntaContexto = require('./localizaPerguntaContexto')
const localizaResposta = require('../localizarResposta/localizaResposta')
const incrementaChamada = require('./incrementaChamada')

module.exports = async(pergunta, contextoId, res, token) => {

    try {
        let perguntaContextoRetornado

        let perguntaRetornada = await localizaPerguntaIntera(pergunta, contextoId, res, token)
        
        if(perguntaRetornada.encontrado) {
            
            if(perguntaRetornada.perguntaRaiz == null){
                perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.id, contextoId, res, token)
                console.log(perguntaContextoRetornado, 11111)
            }else{
                perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.perguntaRaiz, contextoId, res, token)
            }

            if(perguntaContextoRetornado.encontrado) {
                const resposta = await localizaResposta(perguntaContextoRetornado.id, perguntaRetornada.chamada, token)
                    
                if(resposta.encontrado){    
                    incrementaChamada(perguntaRetornada, token)
                    perguntaRetornada.resposta = resposta.respostaEscolhida
                    perguntaRetornada.respostaContextoId = resposta.id
                    return perguntaRetornada
                } else {
                    perguntaRetornada.resposta = "Não sei"
                    return perguntaRetornada
                }
            }
            else {
                perguntaRetornada.resposta = "Não sei"
                return perguntaRetornada
            }
        } else {
            perguntaRetornada = await localizaPerguntaPorToken(pergunta, contextoId, res, token)
            if(perguntaRetornada.encontrado) {
                
                if(perguntaRetornada.perguntaRaiz == null){
                    perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.id, contextoId, res, token)
                }else{
                    perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.perguntaRaiz, contextoId, res, token)
                }

                if(perguntaContextoRetornado.encontrado) {
                    const resposta = await localizaResposta(perguntaContextoRetornado.id, perguntaRetornada.chamada, token)
                    
                    if(resposta.encontrado){    
                        incrementaChamada(perguntaRetornada, token)
                        perguntaRetornada.resposta = resposta.respostaEscolhida
                        perguntaRetornada.respostaContextoId = resposta.id
                        return perguntaRetornada
                    } else {
                        perguntaRetornada.resposta = "Não sei"
                        return perguntaRetornada
                    }
                }   
                else {
                    perguntaRetornada.resposta = "Não sei"
                    perguntaRetornada.pergunta = "Não sei"
                    return perguntaRetornada
                }
            } else {
                perguntaRetornada.resposta = "Não sei"
                perguntaRetornada.pergunta = "Não sei"
                return perguntaRetornada
            }
        }
    } catch(err) {
        console.error(err)
        return err
    }
}
