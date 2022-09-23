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
        const passport = require('passport');
        var controller = new Controller();

        // adding route for object, here app is express instance which provide use
        // get method for handling get request from http server. 
        app.post('/rest/localizaPergunta/token', passport.authenticate('jwt', { session: false}), function (req, res) {
            const index = req.rawHeaders.indexOf('Authorization')
            controller.procuraPerguntaToken(req.body.pergunta, req.body.contextoId, req, res, req.rawHeaders[index + 1]);
        });

        app.post('/rest/localizaPergunta/inteira', passport.authenticate('jwt', { session: false}), function (req, res) {
            const index = req.rawHeaders.indexOf('Authorization')
            controller.procuraPerguntaInteira(req.body.pergunta, req.body.contextoId, req, res, req.rawHeaders[index + 1]);
        });

        app.post('/rest/localizaPergunta', passport.authenticate('jwt', { session: false}), function (req, res) {
            const index = req.rawHeaders.indexOf('Authorization')
            controller.localizarPergunta(req.body.pergunta, req.body.contextoId, req, res, req.rawHeaders[index + 1]);
        });
    }

};