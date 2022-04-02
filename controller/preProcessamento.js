/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: custom route for fetching data
*/

var validator    = new (require('./validators/preProcessamento.js'))()
var filterText = require('../api/preprocessamento/preProcessamento.js')


function PreProcessamentoController() {

    this.filter = function (texto, req, res)  {
        var errors = validator.checkBody(req);

        if(errors.length > 0){
            res.status(400).send(errors);
        } 
        else {
            filterText(texto, res)
        }
        
    }
    
}

module.exports = PreProcessamentoController;