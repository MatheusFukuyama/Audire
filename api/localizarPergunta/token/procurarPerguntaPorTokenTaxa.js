/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 22/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const preProcessamentoFuncao = require('../../preprocessamento/preProcessamentoFuncao')
const axios = require('axios')
const similaridade = require('jaro-winkler')

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
        let qntToken = 0
        let maiorTaxa = 0
        let taxaAtual = 0
        let perguntaEncontrada = {}

        data.forEach(pergunta => {
            if(pergunta.perguntaRaiz == null) {
                tokens.forEach(token => {
                    if(pergunta.enunciadoLimpo.split(' ').includes(`${token}`)) {
                        qntToken++
                    }  
                    
                
                })

                taxaAtual = qntToken/pergunta.enunciadoLimpo.split(' ').length
                


                data.forEach(perguntaFilha => {
                    qntToken = 0

                    if(perguntaFilha.perguntaRaiz == pergunta.id) {
                        tokens.forEach(token => {
                            if(perguntaFilha.enunciadoLimpo.split(' ').includes(`${token}`)) {
                                qntToken++
                            }
                            
                            taxaAtual += qntToken/perguntaFilha.enunciadoLimpo.split(' ').length
                        })
                    }
                })

                if(taxaAtual > maiorTaxa){
                    maiorTaxa = taxaAtual
                    perguntaEncontrada = pergunta
                }

                taxaAtual = 0
                qntToken = 0
            }
        })

       
        perguntaEncontrada.encontrado = true
        return perguntaEncontrada

    } catch(err) {
        console.error(err)
        return err
    }
}
