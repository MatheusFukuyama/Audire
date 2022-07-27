/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: methods for fetching mysql data
*/

var Comunicacao = function(params) {
    this.id           = params.id;
    this.pessoaId     = params.pessoaId;
    this.contextoId   = params.contextoId;
    this.dataInicio   = params.dataInicio;
    this.dataTermino  = params.dataTermino;
}

module.exports = Comunicacao;