/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for fetching firebase data
*/
//methods for fetching firebase data

var Error        = require('../../entity/error.js');

function RegionPersistenceFirebase() {
    // get all objects data 
    this.getAll = function (db, res) {
        // calling acquire methods and passing callback method that will be execute query
        // return response to server 
        db.region.orderByChild("initials")
        .on("value", 
            function(snapshot) {
                res.send(snapshot.val());
            }
        );
    }; // fim this.getAll

    // get object by id
    this.getById = function (db, id, res) {
        // get id as parameter to passing into query and return filter data
        db.region.orderByChild("initials")
        .equalTo(id)
        .on("value", 
            function(snapshot) {
                res.send(snapshot.val());
            }
        );
    }; // fim this.getById

    // get object by name
    this.getByName = function (db, name, res) {
        // get name as parameter to passing into query and return filter data
        db.region.orderByChild("name")
        .equalTo(name)
        .on("value", 
            function(snapshot) {
                res.send(snapshot.val());
            }
        );
    }; // fim this.getByName


    // get object by initials
    this.getByInitials = function (db, initials, res) {
        db.region.orderByChild("initials")
        .equalTo(initials)
        .on("value", 
            function(snapshot) {
                res.send(snapshot.val());
            }
        );
    }; // fim this.getByInitials


    // get quantity object by name
    this.getQttByName = function (db, name, res) {
        return new Promise((resolve, reject) => {
            db.region
                .count({ where: { name: name } })
                .then(qtt => {
                    //res.json({ qtde: qtt });
                    resolve(qtt);
                })
                .catch( function ( erro ) {
                    console.log("Erro: " + erro);
                    reject(new Error("Nome em uso " + erro));
                    //reject(new Error("Nome em uso " + erro));
                });
        });   // Closing of Promise block
    }; // fim this.getQttByName


    // get quantity object by initiais
    this.getQttByInitials = function (db, initials, res) {
        return new Promise((resolve, reject) => {
            db.region
                .count({ where: { initials: initials } })
                .then(qtt => {
                    //res.json({ qtde: qtt });
                    resolve(qtt);
                })
                .catch( function ( erro ) {
                    console.log("Erro: " + erro);
                    reject(new Error("Sigla em uso " + erro));
                });
        });   // Closing of Promise block
    }; // fim this.getQttByInitials


    // verify is object by name exists
    this.isNameInUse = function (db, name, res) {
        return new Promise((resolve, reject) => {
            var isNameInUse = false;

            this.getQttByName(db, name, res)
            .then(qtt => {
                if   (qtt == 0)
                    isNameInUse = false;
                else isNameInUse = true;

                resolve(isNameInUse);
            })
            .catch( function ( erro ) {
                console.log("Erro nome em uso: " + erro);
                reject(new Error("Nome em uso " + erro));
            });
        });   // Closing of Promise block
    }; // fim this.isNameInUse


    // verify is object by initials exists
    this.isInitialsInUse = function (db, initials, res) {
        return new Promise((resolve, reject) => {
            var isNameInUse = false;

            this.getQttByInitials(db, initials, res)
                .then(qtt => {
                    if   (qtt == 0)
                         isInitialsInUse = false;
                    else isInitialsInUse = true;

                    resolve(isInitialsInUse);
                })
                .catch( function ( erro ) {
                    console.log("Erro sigla em uso: " + erro);
                    reject(new Error("Sigla em uso " + erro));
                });
            });   // Closing of Promise block
    }; // fim this.isInitialsInUse


    this.add = function (db, object, res) {
        // get object as parameter to passing into query and return filter data
        db.region.push({
            name:     object.name,
            initials: object.initials
        })
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
                message:  'Erro ao incluir região',
                response: err
            }
            
            var error = new Error(params);
            res.json({error});

        });
    }; // fim this.add


    this.update = function (db, object, res) {
        // get object as parameter to passing into query and return filter data
        db.region
            .update(object, {
                where: {
                    id: object.id
                }
            })
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
                    message:  'Erro ao alterar região',
                    response: err
                };

                var error = new Error(params);
                res.json({error});
            });
    }; // fim this.update


    this.deleteById = function (db, id, res) {
        // get id as parameter to passing into query and return filter data
        db.region
            .destroy({
                where: {
                    id: id
                }
            })
            .then(function (deletedRecord) {
                if (deletedRecord === 1) {
                    code     = 200;
                    message  = 'OK';
                    response = 'Record is successfully deleted.';
                }
                else {
                    code     = 404;
                    message  = 'OK';
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

    }; // fim this.deleteById

}

module.exports = RegionPersistenceFirebase;
