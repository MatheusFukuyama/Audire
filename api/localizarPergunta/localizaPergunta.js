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

module.exports = async(pergunta, contextoId, res) => {

    try {
        let perguntaContextoRetornado

        let perguntaRetornada = await localizaPerguntaIntera(pergunta, contextoId, res)
        if(perguntaRetornada.encontrado) {
            
            if(perguntaRetornada.perguntaRaiz == null){
                perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.id, contextoId, res)
            }else{
                perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.perguntaRaiz, contextoId, res)
            }

            if(perguntaContextoRetornado.encontrado) {
                localizaResposta(perguntaContextoRetornado.id)
            }
            else {
                res.send("pergunta não encontrada")
            }
        } else {
            perguntaRetornada = await localizaPerguntaPorToken(pergunta, contextoId, res)
            if(perguntaRetornada.encontrado) {
                console.log(perguntaRetornada)
                if(perguntaRetornada.perguntaRaiz == null){
                    perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.id, contextoId, res)
                }else{
                    perguntaContextoRetornado = await localizaPerguntaContexto(perguntaRetornada.perguntaRaiz, contextoId, res)
                }

                if(perguntaContextoRetornado.encontrado) {
                    localizaResposta(perguntaContextoRetornado.id)
                }   
                else {
                    res.send("pergunta não encontrada")
                }
            } else {
                res.send('pergunta não encontrada')
            }
        }
    } catch(err) {
        console.error(err)
        return err
    }
}
