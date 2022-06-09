/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 01/04/2018
 * @desc: custom route for fetching data
*/

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {
        //custom route for fetching data
        var Controller = require('../controller/pessoa');
        var controller = new Controller();

        app.get('/rest/pessoas', function (req, res) {
            controller.getAll(res);
        });

        // here we gets id from request and passing to it object method.
        app.get('/rest/pessoa/:id/', function (req, res) {
            controller.getById(req, res);
        });

        // here we insert an object.
        app.post('/rest/pessoa', function (req, res) {
            controller.add(req, res);
        });

        // here we update an object.
        app.put('/rest/pessoa', function (req, res) {
            controller.update(req, res);
        });

        // here we delete an object passing id to it object method.
        app.delete('/rest/pessoa/:id', function (req, res) {
            controller.deleteById(req.params.id, res);
        });
    }

};