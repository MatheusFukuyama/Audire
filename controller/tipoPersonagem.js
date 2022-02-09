/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/11/2021
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/tipoPersonagem.js'))()
var TipoPersonagem   = require('../entity/tipoPersonagem.js');

function TipoPersonagemController() {
    var Persistence  = require('../persistence/tipoPersonagem.js');
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
            var tipoPersonagemParams = {
                id:       '',
                nome:     req.body.nome
            }

            var tipoPersonagem = new TipoPersonagem(tipoPersonagemParams);

            persistence.add(tipoPersonagem, res);
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
                var tipoPersonagemParams = {
                    id:               req.body.id,
                    nome:     req.body.nome
                }
                
                var tipoPersonagem = new TipoPersonagem(tipoPersonagemParams);

                persistence.update(tipoPersonagem, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = TipoPersonagemController;