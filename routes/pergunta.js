/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2022
 * @desc: custom route for fetching data
*/

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {
        //custom route for fetching data
        var Controller = require('../controller/pergunta');
        var controller = new Controller();

        app.get('/rest/perguntas', function (req, res) {
            controller.getAll(res);
        });

        // here we gets id from request and passing to it object method.
        app.get('/rest/pergunta/:id/', function (req, res) {
            controller.getById(req, res);
        });

        // here we insert an object.
        app.post('/rest/pergunta', function (req, res) {
            controller.add(req, res);
        });

        // here we update an object.
        app.put('/rest/pergunta', function (req, res) {
            controller.update(req, res);
        });

        // here we delete an object passing id to it object method.
        app.delete('/rest/pergunta/:id', function (req, res) {
            controller.deleteById(req.params.id, res);
        });
    }

};