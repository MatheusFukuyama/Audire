/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 09/04/2021
 * @desc: methods for fetching mysql data
*/

var Pessoa = function(params) {
    this.id               = params.id;
    this.primeiroNome     = params.primeiroNome;
    this.ultimoNome       = params.ultimoNome;
    this.dataCriacao      = params.dataCriacao;
    this.email            = params.email;
    this.senha            = params.senha;
    this.generoId         = params.generoId;
    
}

module.exports = Pessoa;