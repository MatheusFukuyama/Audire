/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/perguntaMap.js'))()
var PerguntaMap   = require('../entity/perguntaMap.js');

function PerguntaMapController() {
    var Persistence  = require('../persistence/perguntaMap.js');
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
            var perguntaMapParams = {
                id:           '',
                palavra:      req.body.palavra,
                perguntaId:   req.body.perguntaId
            }

            var perguntaMap = new PerguntaMap(perguntaMapParams);

            persistence.add(perguntaMap, res);
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
            var perguntaMapParams = {
                id:           req.body.id,
                palavra:      req.body.palavra,
                perguntaId:   req.body.perguntaId
            }

            var perguntaMap = new PerguntaMap(perguntaMapParams);

            persistence.update(perguntaMap, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = PerguntaMapController;