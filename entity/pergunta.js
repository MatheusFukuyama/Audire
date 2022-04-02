/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: methods for fetching mysql data
*/

var Pergunta = function(params) {
    this.id             = params.id;
    this.enunciado      = params.enunciado;
    this.tipo           = params.tipo;
    this.enunciadoLimpo = params.enunciadoLimpo;
    this.perguntaRaiz   = params.perguntaRaiz;
    this.criadorId      = params.criadorId
}

module.exports = Pergunta;