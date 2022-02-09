/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 08/02/2022
 * @desc: methods for fetching mysql data
*/

var Criador = function(params) {
    this.id       = params.id;
    this.nome     = params.nome;
    this.codigo   = params.codigo;

}

module.exports = Criador;