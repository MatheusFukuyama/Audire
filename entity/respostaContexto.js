/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: methods for fetching mysql data
*/

var RespostaContexto = function(params) {
    this.id                   = params.id;
    this.resposta             = params.resposta;
    this.ordem                = params.ordem;
    this.perguntaContextoId   = params.perguntaContextoId;
}

module.exports = RespostaContexto;