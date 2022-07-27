/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 14/06/2022
 * @desc: methods for fetching mysql data
*/

var PerguntaContexto = function(params) {
    this.id           = params.id;
    this.contextoId   = params.contextoId;
    this.perguntaId   = params.perguntaId;
}

module.exports = PerguntaContexto;