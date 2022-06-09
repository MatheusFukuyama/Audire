/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/11/2021
 * @desc: methods for fetching mysql data
*/

var Personagem = function(params) {
    this.id               = params.id;
    this.nome             = params.nome;
    this.dataCriacao      = params.dataCriacao;
    this.tipoPersonagemId = params.tipoPersonagemId;
    this.generoId         = params.generoId;

}

module.exports = Personagem;