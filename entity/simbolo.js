/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/02/2022
 * @desc: methods for fetching mysql data
*/

var Simbolo = function(params) {
    this.id       = params.id;
    this.simbolo     = params.simbolo;
    this.idiomaId   = params.idiomaId
}

module.exports = Simbolo;