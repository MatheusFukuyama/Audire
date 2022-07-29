/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/localizaPergunta.js'))()
var perguntaInteira = require('../api/localizarPergunta/inteira/localizarPerguntaInteira.js')
var perguntaToken = require('../api/localizarPergunta/token/localizarPerguntaPorToken.js')
var localizarPergunta = require('../api/localizarPergunta/localizaPergunta')


function LocalizaPerguntaController() {

    this.procuraPerguntaInteira = function (pergunta, contextoId, req, res)  {
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            perguntaInteira(pergunta, contextoId, res)
        }
        
    }

    this.procuraPerguntaToken = function (pergunta, contextoId, req, res)  {
        var errors = validator.checkBody(req);
        
        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            perguntaToken(pergunta, contextoId, res)
        }
        
    }

    this.localizarPergunta = function (pergunta, contextoId, req, res)  {
        var errors = validator.checkBody(req);
        
        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            localizarPergunta(pergunta, contextoId, res)
        }
        
    }
    
}

module.exports = LocalizaPerguntaController;