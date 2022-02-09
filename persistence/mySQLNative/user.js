/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data
var connection = require('../connections/MySQLConnect');

function UserModel() {

    // get all users data 
    this.getAll = function (res) {
        // initialize database connection
        connection.init();

        // calling acquire methods and passing callback method that will be execute query
        // return response to server 
        connection.acquire(function (err, con) {
            con.query('SELECT * FROM user', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    // get user by id
    this.getById = function (id, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT name, '   +
                        '       id '      + 
                        'FROM   user '    +
                        'WHERE  id = ?;';
            con.query(query, id, function (err, result) {
                    con.release();
                    res.send(result);
                });
        });
    };

    // get user by name
    this.getByName = function (name, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT id '      +
                        'FROM   user '    +
                        'WHERE  upper(name) = ?;';
            con.query(query, name.toUpperCase(), function (err, result) {
                    if (result.length == 0){
                        console.log('A tabela está vazia!');
                    }
                    con.release();
                    res.send(result);
                });
        });
    };

    
    // get quantity user by name
    this.getQttByName = function (name, res) {
        var qtt = 0;

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT count(*) qtt ' +
                        'FROM   user '         +
                        'WHERE  upper(name) = ?;';
            con.query(query, name.toUpperCase(), function (err, result) {
                    console.log('mmoooodddeeelll ',result[0].qtt);

                    qtt = result[0].qtt;

                    con.release();
                    res.send(result);
                });
        });

        return qtt;
    };

    
    // verify is user by name exists
    //this.isNameInUse = function (name, res, callback) {
    //this.isNameInUse = function (name, error, res) {
    this.isNameInUse = function (name, res) {
        var exists = true;

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT count(*) qtt ' +
                        'FROM   user '         +
                        'WHERE  upper(name) = ?;';
            con.query(query, name.toUpperCase(), function (err, result) {
                console.log('mmool ',result[0].qtt);

                if (result[0].qtt == 0)
                    exists = false;

                con.release();
                //res.send(result);
            });
        });

        console.log('antes do return ', exis);

        return exists;
    };

    
    this.add = function (req, res) {
        // ****************************************************
        // Helen - Encontrei esse exemplo mas não funcionou
        // ****************************************************
        //var jsonData = req.body;
        //var values   = [];

        //for(var i=0; i< jsondata.length; i++)
        //    values.push([jsondata[i].name]);
           //values.push([jsondata[i].name,jsondata[i].age]);

        var values = [req.body.name];

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'INSERT INTO user (name) VALUES (?);';
            con.query(query, values, function (err, result) {
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        return res.json({errors: ['Erro ao inserir']})
                    }
                    con.release();
                    res.send(result);
                });
        });
    };

    
    this.update = function (req, res) {
        var values = [req.body.name, req.body.id];

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'UPDATE user set name = ? ' +
                        'WHERE  id = ?;';
            con.query(query, values, function (err, result) {
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        return res.json({errors: ['Erro ao atualizar']})
                    }
                    con.release();
                    res.send(result);
                });
        });
    };
    

    this.deleteById = function (id, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'DELETE FROM user '    +
                        'WHERE  id = ?;';

            con.query(query, id, function (err, result) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    return res.json({errors: ['Erro ao excluir']})
                }
                con.release();
                res.send(result);
                });
        });
    };

}

module.exports = new UserModel();