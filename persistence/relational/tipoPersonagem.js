/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 13/12/2021
 * @desc: methods for fetching mysql data
*/


var Error = require('../../entity/error.js');


function TipoPersonagemPersistence() {
    // get all objects data 
    this.getAll = function (db, res) {
        
        db.tipoPersonagem
            .findAll()
            .then(object => {
                res.send(JSON.parse(JSON.stringify(object)));
            });
    };

    // get object by id
    this.getById = function (db, id, res) {

        db.tipoPersonagem
            .findAll({ 
                where: {id: id}
            })
            .then(object => {
                res.send(JSON.parse(JSON.stringify(object)));
            })
    }; 
    
    this.add = function (db, object, res) {
        db.tipoPersonagem
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
                    message:  'Erro ao incluir tipo de personagem',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    };

    
    this.update = function (db, object, res) {
        db.tipoPersonagem
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
                    message:  'Erro ao alterar tipo de personagem',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    };
    

    this.deleteById = function (db, id, res) {
        db.tipoPersonagem
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

module.exports = TipoPersonagemPersistence;