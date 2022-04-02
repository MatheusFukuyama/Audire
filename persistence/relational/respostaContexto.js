/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date:   01/04/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data


var Error = require('../../entity/error.js');


function RespostaContextoPersistence() {
    // get all objects data 
    this.getAll = function (db, res) {
        // calling acquire methods and passing callback method that will be execute query
        // return response to server 

        db.respostaContexto
            .findAll()
            .then(object => {
                res.send(JSON.parse(JSON.stringify(object)));
            });
    }; // this.getAll = function (res) {

    // get object by id
    this.getById = function (db, id, res) {
        // get id as parameter to passing into query and return filter data

        db.respostaContexto
            .findAll({ 
                where: {id: id}
            })
            .then(object => {
                res.send(JSON.parse(JSON.stringify(object)));
            })
    }; // this.getById = function (id, res) {

    
    this.add = function (db, object, res) {
        // get object as parameter to passing into query and return filter data
        db.respostaContexto
            .create(object) 
            .then(function (addedRecord) {
                var params = {
                    code:     200,
                    message:  'OK',
                    response: 'Record is successfully added.'
                };

                var error = new Error(params);
                res.json({error});
            })
            .catch(function (err) {
                var params = {
                    code:     500,
                    message:  'Erro ao incluir respostaContexto',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    }; // this.add = function (object, res) {

    
    this.update = function (db, object, res) {
        // get object as parameter to passing into query and return filter data
        db.respostaContexto
            .update(object,
                {where: {
                    id: object.id
                }})
            .then(function (updatedRecord) {
                var params = {
                    code:     200,
                    message:  'OK',
                    response: 'Record is successfully updated.'
                };

                var error = new Error(params);
                res.json({error});
            })
            .catch(function (err) {
                var params = {
                    code:     500,
                    message:  'Erro ao alterar respostaContexto',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    }; // this.update = function (object, res) {
    

    this.deleteById = function (db, id, res) {
        db.respostaContexto
            .destroy({
                where: {
                    id: id
                }})
            .then(function (deletedRecord) {
                if (deletedRecord === 1) {
                    code = 200;
                    message = 'OK';
                    response = 'Record is successfully deleted.';
                } 
                else {
                        code = 404;
                        message = 'OK';
                        response = 'Record not found.';
                }
                var params = {
                    code:     code,
                    message:  message,
                    response: response
                };

                var error = new Error(params);
                res.json({error});
            })
            .catch(function (err) {
                var params = {
                    code:     500,
                    message:  'Erro ao excluir',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });

    }; // this.deleteById = function (id, res) {

}

module.exports = RespostaContextoPersistence;