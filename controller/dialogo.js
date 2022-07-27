/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/dialogo.js'))()
var Dialogo   = require('../entity/dialogo.js');

function DialogoController() {
    const preProcessamento = require('../api/preprocessamento/preProcessamentoFuncao')
    var Persistence      = require('../persistence/dialogo.js');
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
    this.add = async function (req, res) {
        // ************************************************
        // Ver uma forma de juntar os dois erros
        // ************************************************
        var errors  = validator.checkBody(req, res);        

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            var DialogoParams = {
                id:                 '',
                dataRealizacao:     req.body.dataRealizacao,
                pergunta:           req.body.pergunta,
                perguntaLimpa:      await preProcessamento(req.body.pergunta),
                resposta:           req.body.resposta,
                perguntaRaiz:       req.body.perguntaRaiz,
                perguntaSinonimo:   req.body.perguntaSinonimo,
                respostaContextoId: req.body.respostaContextoId
            }
            
            var dialogo = new Dialogo(DialogoParams);
   
            persistence.add(dialogo, res);
            }

    };

    // update one object 
    this.update = async function (req, res) {
        // Usando o exemplo do Leonardo
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            var DialogoParams = {
                id:                 req.body.id,
                dataRealizacao:     req.body.dataRealizacao,
                pergunta:           req.body.pergunta,
                perguntaLimpa:      await preProcessamentoFuncao(req.body.pergunta),
                resposta:           req.body.resposta,
                perguntaRaiz:       req.body.perguntaRaiz,
                perguntaSinonimo:   req.body.perguntaSinonimo,
                respostaContextoId: req.body.respostaContextoId
            }
            
            var dialogo = new Dialogo(DialogoParams);
   
            persistence.update(dialogo, res);
        }
    };

    // delete one object 
    this.deleteById = function (id, res) {
        persistence.deleteById(id, res);
    };

}

module.exports = DialogoController;