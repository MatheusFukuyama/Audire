/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 11/06/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/estrategia.js'))()
var Estrategia   = require('../entity/estrategia.js');

function EstrategiaController() {
    var Persistence      = require('../persistence/estrategia.js');
    var persistence      = new Persistence();
    
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
            var EstrategiaParams = {
                id:                 '',
                nomeMetodo:         req.body.nomeMetodo,
                local:              req.body.local,
                dialogoId:          req.body.dialogoId,
            }
            
            var estrategia = new Estrategia(EstrategiaParams);
   
            persistence.add(estrategia, res);
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
            var EstrategiaParams = {
                id:                 req.body.id,
                nomeMetodo:         req.body.nomeMetodo,
                local:              req.body.local,
                dialogoId:          req.body.dialogoId,
            }
            
            var estrategia = new Estrategia(EstrategiaParams);
   
            persistence.update(estrategia, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = EstrategiaController;