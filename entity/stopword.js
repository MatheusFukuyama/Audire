/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/02/2022
 * @desc: methods for fetching mysql data
*/

var Stopword = function(params) {
    this.id       = params.id;
    this.palavra     = params.palavra;
    this.idiomaId   = params.idiomaId
}

module.exports = Stopword