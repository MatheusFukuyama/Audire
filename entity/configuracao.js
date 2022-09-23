/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/02/2022
 * @desc: methods for fetching mysql data
*/

var Configuracao = function(params) {
    this.id                       = params.id;
    this.percentualSimilaridade   = params.percentualSimilaridade;
    this.idiomaId                 = params.idiomaId
}

module.exports = Configuracao