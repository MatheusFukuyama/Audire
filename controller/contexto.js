/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/contexto.js'))()
var Contexto   = require('../entity/contexto.js');

function ContextoController() {
    var Persistence  = require('../persistence/contexto.js');
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
        persistence.getByName(req.params.name, res);
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
            var contextoParams = {
                id:             '',
                titulo:         req.body.titulo,
                personagemId:   req.body.personagemId,
            }

            var contexto = new Contexto(contextoParams);

            persistence.add(contexto, res);

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
            var contextoParams = {
                id:             req.body.id,
                titulo:         req.body.titulo,
                personagemId:   req.body.personagemId
            }

            var contexto = new Contexto(contextoParams);

            persistence.update(contexto, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = ContextoController;