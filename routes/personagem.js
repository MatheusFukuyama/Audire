/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: custom route for fetching data
*/

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {
        //custom route for fetching data
        var Controller = require('../controller/personagem');
        var controller = new Controller();

        app.get('/rest/personagens', function (req, res) {
            controller.getAll(res);
        });

        // here we gets id from request and passing to it object method.
        app.get('/rest/personagem/:id/', function (req, res) {
            controller.getById(req, res);
        });

        // here we insert an object.
        app.post('/rest/personagem', function (req, res) {
            controller.add(req, res);
        });

        // here we update an object.
        app.put('/rest/personagem', function (req, res) {
            controller.update(req, res);
        });

        // here we delete an object passing id to it object method.
        app.delete('/rest/personagem/:id', function (req, res) {
            controller.deleteById(req.params.id, res);
        });
    }

};