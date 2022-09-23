/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 15/08/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')
const similaridade = require('jaro-winkler')
const localizaPergunta = require('../localizarPergunta/localizaPergunta')
const preProcessamentoFuncao = require('../preprocessamento/preProcessamentoFuncao')
const jwt = require('jwt-simple')
const { authSecret } = require('../../.env')

const options = {
    protocol: 'https',
    host: '127.0.0.1',
    port: 8000
}


// async function perguntaContexto(pergunta, )

module.exports = async(req, res, token) => {

    const baseUrlComunicacao = 'localhost:8000/rest/comunicacoes'

    try {

        const { data } = await axios.get(baseUrlComunicacao, { proxy: options ,  headers:{ 'Authorization': token }})

        if(data[data.length-1].dataTermino != null) {
            res.send('Abra uma comunicação para iniciar uma conversa!')
        } else {

            const dadosPergunta = await localizaPergunta(req.body.pergunta, data[data.length-1].contextoId, res, token)

            const payload = token.replace('bearer ', '')
            const pessoa = jwt.decode(payload, authSecret)
    
        
            var DialogoParams = {
                pergunta: req.body.pergunta,
                perguntaLimpa: await preProcessamentoFuncao(req.body.pergunta, token),
                resposta: dadosPergunta.resposta,
                comunicacaoId: data[data.length-1].id,
                perguntaRaizId: dadosPergunta.perguntaRaiz,
                perguntaSinonimoId: dadosPergunta.id,
                respostaContextoId: dadosPergunta.respostaContextoId,
                pessoaId: pessoa.id
            }
    
            axios({
                method: 'post',
                url: 'localhost:8000/rest/dialogo',
                data: DialogoParams,
                proxy: options,
                headers: { 'Authorization': token }
              });
    
            res.send(DialogoParams)
        }
       

    } catch(err) {
        console.error(err)
        return err
    }
}