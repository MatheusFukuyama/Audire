/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 26/02/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/reducaoLexical.js'))()
var ReducaoLexical   = require('../entity/reducaoLexical.js');

function ReducaoLexicalController() {
    var Persistence  = require('../persistence/reducaoLexical.js');
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
            var reducaoLexicalParams = {
                id:       '',
                palavra:     req.body.palavra,
                radical:     req.body.radical,
                idiomaId:    req.body.idiomaId
            }

            var reducaoLexical = new ReducaoLexical(reducaoLexicalParams);

            persistence.add(reducaoLexical, res);
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
                var reducaoLexicalParams = {
                    id:               req.body.id,
                    palavra:      req.body.palavra,
                    radical:      req.body.radical,
                    idiomaId:     req.body.idiomaId
                }
                
                var reducaoLexical = new ReducaoLexical(reducaoLexicalParams);

                persistence.update(reducaoLexical, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = ReducaoLexicalController;