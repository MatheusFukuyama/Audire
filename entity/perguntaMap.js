/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
*/

var PerguntaMap = function(params) {
    this.id               = params.id;
    this.palavra          = params.palavra;
    this.perguntaId       = params.perguntaId;
}

module.exports = PerguntaMap;