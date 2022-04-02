/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 16/03/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/acentuacao.js'))()
var Acentuacao   = require('../entity/acentuacao.js');

function AcentuacaoController() {
    var Persistence  = require('../persistence/acentuacao.js');
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
            var acentuacaoParams = {
                id:       '',
                caracter:     req.body.caracter,
                suplente:     req.body.suplente,
                idiomaId:     req.body.idiomaId
            }

            var acentuacao = new Acentuacao(acentuacaoParams);

            persistence.add(acentuacao, res);
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
                var acentuacaoParams = {
                    id:               req.body.id,
                    caracter:     req.body.caracter,
                    suplente:     req.body.suplente,
                    idiomaId:     req.body.idiomaId
                }
                
                var acentuacao = new Acentuacao(acentuacaoParams);

                persistence.update(acentuacao, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = AcentuacaoController;