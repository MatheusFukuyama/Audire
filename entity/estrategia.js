/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 11/06/2022
 * @desc: methods for fetching mysql data
*/

var Estrategia = function(params) {
    this.id                 = params.id;
    this.nomeMetodo         = params.nomeMetodo;
    this.local              = params.local;
    this.dialogoId          = params.dialogoId;
}
module.exports = Estrategia;