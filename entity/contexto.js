/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
*/

var Contexto = function(params) {
    this.id             = params.id;
    this.titulo         = params.titulo;
    this.personagemId   = params.personagemId;
}

module.exports = Contexto;