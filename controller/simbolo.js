/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/02/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/simbolo.js'))()
var Simbolo   = require('../entity/simbolo.js');

function SimboloController() {
    var Persistence  = require('../persistence/simbolo.js');
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
            var simboloParams = {
                id:       '',
                simbolo:     req.body.simbolo,
                idiomaId:    req.body.idiomaId
            }

            var simbolo = new Simbolo(simboloParams);

            persistence.add(simbolo, res);
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
                var simboloParams = {
                    id:               req.body.id,
                    simbolo:     req.body.simbolo,
                    idiomaId:    req.body.idiomaId
                }
                
                var simbolo = new Simbolo(simboloParams);

                persistence.update(simbolo, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = SimboloController;