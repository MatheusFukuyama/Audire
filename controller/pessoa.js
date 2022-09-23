/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 08/04/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/pessoa.js'))()
var Pessoa   = require('../entity/pessoa.js');
const bcrypt = require('bcrypt-nodejs')

function PessoaController() {
    var Persistence  = require('../persistence/pessoa.js');
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
    this.add = async function (req, res) {
        // ************************************************
        // Ver uma forma de juntar os dois erros
        // ************************************************
        var errors  = validator.checkBody(req, res);        

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {

            const hashedPassword = bcrypt.hashSync(req.body.senha)

            var pessoaParams = {
                id:       '',
                primeiroNome:     req.body.primeiroNome,
                ultimoNome:       req.body.ultimoNome,
                email:            req.body.email,
                senha:            hashedPassword,
                generoId:         req.body.generoId,
            }
            
            var pessoa = new Pessoa(pessoaParams);

            persistence.add(pessoa, res);
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

            const hashedPassword = bcrypt.hashSync(req.body.senha)

            var pessoaParams = {
                id:               req.body.id,
                primeiroNome:     req.body.primeiroNome,
                ultimoNome:       req.body.ultimoNome,
                email:            req.body.email,
                senha:            hashedPassword,
                generoId:         req.body.generoId
            }
            
            var pessoa = new Pessoa(pessoaParams);


            persistence.update(pessoa, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = PessoaController;