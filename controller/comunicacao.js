/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/comunicacao.js'))()
var Comunicacao   = require('../entity/comunicacao.js');

function ComunicacaoController() {
    var Persistence  = require('../persistence/comunicacao.js');
    var persistence  = new Persistence();
    
    // get all objects data 
    this.getAll = function (res) {
        persistence.getAll(res);
    };

    // get object by id 
    this.getById = function (req, res) {
        persistence.getById(req.params.id, res);
    };

    // get object by name 
    this.getByName = function (req, res) {
        persistence.getByName(req.params.caracter, res);
    };

    // add one object
    this.add = function (req, res) {
        // ************************************************
        // Ver uma forma de juntar os dois erros
        // ************************************************
        var errors  = validator.checkBody(req, res);        

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            var ComunicacaoParams = {
                id:              '',
                pessoaId:        req.body.pessoaId,
                contextoId:      req.body.contextoId,
                dataInicio:      req.body.dataInicio,
                dataTermino:     req.body.dataTermino
            }
            
            var comunicacao = new Comunicacao(ComunicacaoParams);
   
            persistence.add(comunicacao, res);
            }

    };

    // update one object 
    this.update = function (req, res) {
        // Usando o exemplo do Leonardo
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            var ComunicacaoParams = {
                id:              req.body.comunicacao,
                pessoaId:        req.body.pessoaId,
                contextoId:      req.body.contextoId,
                dataInicio:      req.body.dataInicio,
                dataTermino:     req.body.dataTermino
            }

            var comunicacao = new Comunicacao(ComunicacaoParams);

            persistence.update(comunicacao, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = ComunicacaoController;