/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/respostaContexto.js'))()
var RespostaContexto   = require('../entity/respostaContexto.js');

function RespostaContextoController() {
    var Persistence  = require('../persistence/respostaContexto.js');
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
            var respostaContextoParams = {
                id:                    '',
                resposta:              req.body.resposta,
                ordem:                 req.body.ordem,
                perguntaContextoId:    req.body.perguntaContextoId
            }
           
            var respostaContexto = new RespostaContexto(respostaContextoParams);

            persistence.add(respostaContexto, res);
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
            var respostaContextoParams = {
                id:                     req.body.id,
                resposta:               req.body.resposta,
                ordem:                  req.body.ordem,
                perguntaContextoId:     req.body.perguntaContextoId
            }

            var respostaContexto = new RespostaContexto(respostaContextoParams);

                persistence.update(respostaContexto, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = RespostaContextoController;