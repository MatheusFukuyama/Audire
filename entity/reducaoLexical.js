/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 26/02/2022
 * @desc: methods for fetching mysql data
*/

var ReducaoLexical = function(params) {
    this.id          = params.id;
    this.palavra     = params.palavra;
    this.radical     = params.radical;
    this.idiomaId    = params.idiomaId
}

module.exports = ReducaoLexical