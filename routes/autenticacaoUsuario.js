/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: custom route for fetching data
*/

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {
        //custom route for fetching data
        var Controller = require('../controller/autenticacaoUsuario');
        var controller = new Controller();

        // adding route for object, here app is express instance which provide use
        // get method for handling get request from http server. 
        app.post('/rest/signin', function (req, res) {
            controller.signin(req, res);
        });
        
        app.post('/rest/signin', function (req, res) {
            controller.signin(req, res);
        });

    }

};