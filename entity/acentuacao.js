/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 16/03/2022
 * @desc: methods for fetching mysql data
*/

var Acentuacao = function(params) {
    this.id         = params.id;
    this.caracter   = params.caracter;
    this.suplente   = params.suplente;
    this.idiomaId   = params.idiomaId
}

module.exports = Acentuacao;