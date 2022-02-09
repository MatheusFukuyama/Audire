/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/11/2021
 * @desc: methods for fetching mysql data
*/

var Personagem = function(params) {
    this.id       = params.id;
    this.primeiroNome     = params.primeiroNome;
    this.nomeMeio         = params.nomeMeio;
    this.ultimoNome       = params.ultimoNome;
    this.nomeCurto        = params.nomeCurto;
    this.dataCriacao      = params.dataCriacao;
    this.visibilidade     = params.visibilidade;
    this.tipoPersonagemId = params.tipoPersonagemId;
    this.generoId         = params.generoId;
    this.criadorId        = params.criadorId;

}

module.exports = Personagem;