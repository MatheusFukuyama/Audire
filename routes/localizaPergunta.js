/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 29/03/2022
 * @desc: custom route for fetching data
*/

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {
        //custom route for fetching data
        var Controller = require('../controller/localizaPergunta');
        var controller = new Controller();

        // adding route for object, here app is express instance which provide use
        // get method for handling get request from http server. 
        app.post('/rest/localizaPergunta/igual', function (req, res) {
            controller.procuraPerguntaIgual(req.body.pergunta, req.body.contextoId, req, res);
        });

        app.post('/rest/localizaPergunta/similar', function (req, res) {
            controller.procuraPerguntaSimilar(req.body.pergunta, req.body.contextoId, req, res);
        });
    }

};