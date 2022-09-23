/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/pergunta.js'))()
var Pergunta   = require('../entity/pergunta.js');
var preProcessamentoFuncao = require('../api/preprocessamento/preProcessamentoFuncao')
const jwt = require('jwt-simple')
const { authSecret } = require('../.env')

function PerguntaController() {
    var Persistence  = require('../persistence/pergunta.js');
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

    // add one object
    this.add = async function (req, res, token) {
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

            var perguntaParams = {
                id:             '',
                enunciado:      req.body.enunciado,
                tipo:           req.body.tipo,
                enunciadoLimpo: await preProcessamentoFuncao(req.body.enunciado, token),
                chamada:        0,
                perguntaRaiz:   req.body.perguntaRaiz,
                pessoaId:       pessoa.id
            }
           
            var pergunta = new Pergunta(perguntaParams);

            persistence.add(pergunta, res);
            }

    };

    // update one object 
    this.update = async function (req, res, token) {
        // Usando o exemplo do Leonardo
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            const payload = token.replace('bearer ', '')
            const pessoa = jwt.decode(payload, authSecret)

            var perguntaParams = {
                id:             req.body.id,
                enunciado:      req.body.enunciado,
                tipo:           req.body.tipo,
                enunciadoLimpo: await preProcessamentoFuncao(req.body.enunciado, token),
                chamada:        req.body.chamada,
                perguntaRaiz:   req.body.perguntaRaiz,
                pessoaId:       pessoa.id
            }

            var pergunta = new Pergunta(perguntaParams);


            persistence.update(pergunta, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = PerguntaController;