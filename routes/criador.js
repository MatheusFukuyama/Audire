/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 08/07/2018
 * @desc: custom route for fetching data
*/

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {
        //custom route for fetching data
        var Controller = require('../controller/criador');
        var controller = new Controller();

        // adding route for object, here app is express instance which provide use
        // get method for handling get request from http server. 
        app.get('/rest/criadores', function (req, res) {
            controller.getAll(res);
        });

        // here we gets id from request and passing to it object method.
        app.get('/rest/criador/:id/', function (req, res) {
            controller.getById(req, res);
        });

        // here we gets state from request and passing to it object method.
        /*app.get('/rest/citybystate/:stateId/', function (req, res) {
            controller.getByState(req, res);
        });*/

        // here we gets name from request and passing to it object method.
        /*app.get('/rest/personagemqttbyname/:name/', function (req, res) {
            controller.getQttByName(req, res);
        });

        // here we gets name from request and passing to it object method.
        /*app.get('/rest/cityqttbystate/:stateId/', function (req, res) {
            controller.getQttByState(req, res);
        });*/

        // here we gets name from request and passing to it object method.
        /*app.get('/rest/personagemisnameinuse/:name/', function (req, res) {
            controller.isNameInUse(req.params.name, res);
        });*/

        // here we insert an object.
        app.post('/rest/criador', function (req, res) {
            controller.add(req, res);
        });

        // here we update an object.
        app.put('/rest/criador', function (req, res) {
            controller.update(req, res);
        });

        // here we delete an object passing id to it object method.
        app.delete('/rest/criador/:id', function (req, res) {
            controller.deleteById(req.params.id, res);
        });
    }

};