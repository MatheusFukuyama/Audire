/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/11/2021
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/personagem.js'))()
var Personagem   = require('../entity/personagem.js');
const jwt = require('jwt-simple')
const { authSecret } = require('../.env')

function PersonagemController() {
    var Persistence  = require('../persistence/personagem.js');
    var persistence  = new Persistence();
    
    // get all objects data 
    this.getAll = function (res, token) {
        const payload = token.replace('bearer ', '')
        const pessoa = jwt.decode(payload, authSecret)
        persistence.getAll(res, pessoa.id);
    };

    // get object by id 
    this.getById = function (req, res) {
        persistence.getById(req.params.id, res);
    };

    // get object by name 
    this.getByName = function (req, res) {
        persistence.getByName(req.params.name, res);
    };

    // get quantity of objects by name 
    this.getQttByName = function (req, res) {
        persistence.getQttByName(req.params.name)
        .then((qtt) => {
            res.json({ qtde: qtt });
            console.log("Qtde de personagens com o nome " + req.params.name + ": " + qtt);
        });
    };

    // get name of object in use 
    this.isNameInUse = function (name, res) {
        persistence.isNameInUse(name, res)
        .then((isNameInUse) => {
          console.log("Nome do personagem está em uso? " + isNameInUse);
        });
    };


    // add one object
    this.add = function (req, res, token) {
        // ************************************************
        // Ver uma forma de juntar os dois erros
        // ************************************************
        var errors  = validator.checkBody(req, res);        

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            const payload = token.replace('bearer ', '')
            const pessoa = jwt.decode(payload, authSecret)

            var personagemParams = {
                id:               '',
                nome:             req.body.nome,
                generoId:         req.body.generoId,
                pessoaId:         pessoa.id,
            }
            console.log(personagemParams)
            var personagem = new Personagem(personagemParams);

            persistence.add(personagem, res);
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
            var personagemParams = {
                id:               req.body.id,
                nome:             req.body.nome,
                generoId:         req.body.generoId,
                pessoaId:         req.body.pessoaId,
            }
            
            var personagem = new Personagem(personagemParams);

            persistence.update(personagem, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = PersonagemController;