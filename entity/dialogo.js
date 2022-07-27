/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: methods for fetching mysql data
*/

var Comunicacao = function(params) {
    this.id                 = params.id;
    this.dataRealizacao     = params.dataRealizacao;
    this.pergunta           = params.pergunta;
    this.perguntaLimpa      = params.perguntaLimpa;
    this.resposta           = params.resposta;
    this.comunicacaoId      = params.comunicacaoId
    this.respostaContextoId = params.respostaContextoId;
    this.perguntaRaiz       = params.perguntaRaiz;
    this.perguntaSinonimo   = params.perguntaSinonimo;
}

module.exports = Comunicacao;