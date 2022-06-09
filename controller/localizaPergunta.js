/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/localizaPergunta.js'))()
var perguntaIgual = require('../api/localizaPergunta/procuraPerguntaIgual.js')
var perguntaSimilar = require('../api/localizaPergunta/procuraPerguntaSimilar.js')


function LocalizaPerguntaController() {

    this.procuraPerguntaIgual = function (pergunta, contextoId, req, res)  {
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            perguntaIgual(pergunta, contextoId, res)
        }
        
    }

    this.procuraPerguntaSimilar = function (pergunta, contextoId, req, res)  {
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            perguntaSimilar(pergunta, contextoId, res)
        }
        
    }
    
}

module.exports = LocalizaPerguntaController;