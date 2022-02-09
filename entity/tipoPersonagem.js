/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 25/11/2021
 * @desc: methods for fetching mysql data
*/

var TipoPersonagem = function(params) {
    this.id       = params.id;
    this.nome     = params.nome;

}

module.exports = TipoPersonagem;