/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/11/2021
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data


var Error = require('../../entity/error.js');
const pessoa = require('../../routes/pessoa.js');


function PersonagemPersistence() {
    // get all objects data 
    this.getAll = function (db, pessoaId, res) {
        // calling acquire methods and passing callback method that will be execute query
        // return response to server 

        db.personagem
            .findAll({
                where: { pessoaId }
            })
            .then(object => {
                res.send(JSON.parse(JSON.stringify(object)));
            });
    }; // this.getAll = function (res) {

    // get object by id
    this.getById = function (db, id, res) {
        // get id as parameter to passing into query and return filter data

        db.personagem
            .findAll({ 
                where: {id: id}
            })
            .then(object => {
                res.send(JSON.parse(JSON.stringify(object)));
            })
    }; // this.getById = function (id, res) {
    
    this.add = function (db, object, res) {
        // get object as parameter to passing into query and return filter data
        db.personagem
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
                    message:  'Erro ao incluir personagem',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    }; // this.add = function (object, res) {

    
    this.update = function (db, object, res) {
        // get object as parameter to passing into query and return filter data
        db.personagem
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
                    message:  'Erro ao alterar personagem',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    }; // this.update = function (object, res) {
    

    this.deleteById = function (db, id, res) {
        db.personagem
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

    };

}

module.exports = PersonagemPersistence;