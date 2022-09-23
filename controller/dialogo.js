/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/dialogo.js'))()
var Dialogo   = require('../entity/dialogo.js');
var conversa  = require('../api/conversar/conversa');
const jwt = require('jwt-simple')
const { authSecret } = require('../.env')

function DialogoController() {
    const preProcessamento = require('../api/preprocessamento/preProcessamentoFuncao')
    var Persistence      = require('../persistence/dialogo.js');
    var persistence      = new Persistence();
    
    // get all objects data 
    this.getAll = function (res, token) {
        const payload = token.replace('bearer ', '')
        const pessoa = jwt.decode(payload, authSecret)
        persistence.getAll(res, pessoa.id);
    };

    // get object by id 
    this.getById = function (req, res, token) {
        const payload = token.replace('bearer ', '')
        const pessoa = jwt.decode(payload, authSecret)
        persistence.getById(req.params.id, res, pessoa.id);
    };

    // get object by name 
    this.getByName = function (req, res) {
        persistence.getByName(req.params.caracter, res);
    };

    // add one object
    this.add = async function (req, res, token) {
        // ************************************************
        // Ver uma forma de juntar os dois erros
        // ************************************************
        const payload = token.replace('bearer ', '')
        const pessoa = jwt.decode(payload, authSecret)

        var errors  = validator.checkBody(req, res);        

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            var DialogoParams = {
                id:                     '',
                pergunta:               req.body.pergunta,
                perguntaLimpa:          await preProcessamento(req.body.pergunta, token),
                resposta:               req.body.resposta,
                perguntaRaizId:         req.body.perguntaRaizId,
                perguntaSinonimoId:     req.body.perguntaSinonimoId,
                respostaContextoId:     req.body.respostaContextoId,
                comunicacaoId:          req.body.comunicacaoId,
                pessoaId:               pessoa.id
            }
            
            var dialogo = new Dialogo(DialogoParams);
            console.log(dialogo)
            // persistence.add(dialogo, res);
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

            var DialogoParams = {
                id:                 req.body.id,
                dataRealizacao:     req.body.dataRealizacao,
                pergunta:           req.body.pergunta,
                perguntaLimpa:      await preProcessamentoFuncao(req.body.pergunta, token),
                resposta:           req.body.resposta,
                perguntaRaiz:       req.body.perguntaRaiz,
                perguntaSinonimo:   req.body.perguntaSinonimo,
                respostaContextoId: req.body.respostaContextoId,
                comunicacaoId:      req.body.comunicacaoId,
                pessoaId:           pessoa.id
            }
            
            var dialogo = new Dialogo(DialogoParams);
   
            persistence.update(dialogo, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

    this.conversar = function (req, res, token) {
        conversa(req, res, token)
    };

    
}

module.exports = DialogoController;