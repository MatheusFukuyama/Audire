/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 07/02/202
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/genero.js'))()
var Genero   = require('../entity/genero.js');

function GeneroController() {
    var Persistence  = require('../persistence/genero.js');
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
            var generoParams = {
                id:       '',
                nome:     req.body.nome
            }

            var genero = new Genero(generoParams);

            persistence.add(genero, res);
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
                var generoParams = {
                    id:               req.body.id,
                    nome:     req.body.nome
                }
                
                var genero = new Genero(generoParams);

                persistence.update(genero, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = GeneroController;