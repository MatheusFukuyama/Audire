/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data
var connection = require('../connections/MySQLConnect');

function RegionModel() {

    // get all regions data 
    this.getAll = function (res) {
        // initialize database connection
        connection.init();

        // calling acquire methods and passing callback method that will be execute query
        // return response to server 
        connection.acquire(function (err, con) {
            con.query('SELECT id, name, initials FROM region order by name', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    // get region by id
    this.getById = function (id, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT name, '      +
                        '       initials, '  +
                        '       id '         + 
                        'FROM   region '     +
                        'WHERE  id = ?;';
            con.query(query, id, function (err, result) {
                    con.release();
                    res.send(result);
                });
        });
    };

    // get region by name
    this.getByName = function (name, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT id, name, initials '  +
                        'FROM   region '               +
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

    // get region by initials
    this.getByInitials = function (initials, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT id, name, initials '  +
                        'FROM   region '              +
                        'WHERE  upper(initials) = ?;';
            con.query(query, initials.toUpperCase(), function (err, result) {
                    if (result.length == 0){
                        console.log('A tabela está vazia!');
                    }
                    con.release();
                    res.send(result);
                });
        });
    };
    

    // get quantity region by name
    this.getQttByName = function (name, res) {
        var qtt = 0;

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT count(*) qtt ' +
                        'FROM   region '       +
                        'WHERE  upper(name) = ?;';
            con.query(query, name.toUpperCase(), function (err, result) {
                    qtt = result[0].qtt;

                    con.release();
                    res.send(result);
                });
        });

        return qtt;
    };
   

    // get quantity region by initiais
    this.getQttByInitials = function (initials, res) {
        var qtt = 0;

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT count(*) qtt ' +
                        'FROM   region '       +
                        'WHERE  upper(initials) = ?;';
            con.query(query, initials.toUpperCase(), function (err, result) {
                    qtt = result[0].qtt;

                    con.release();
                    res.send(result);
                });
        });

        return qtt;
    };

    
    // verify is region by name exists
    //this.isNameInUse = function (name, res, callback) {
    //this.isNameInUse = function (name, error, res) {
    this.isNameInUse = function (name, res) {
        var exists = true;

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT count(*) qtt ' +
                        'FROM   region '       +
                        'WHERE  upper(name) = ?;';
            con.query(query, name.toUpperCase(), function (err, result) {
                if (result[0].qtt == 0)
                    exists = false;

                con.release();
                //res.send(result);
            });
        });

        return exists;
    };

    
    this.add = function (region, res) {
        var values = [region.name, region.initials];

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'INSERT INTO region (name, initials) VALUES (?);';
            con.query(query, [values], function (err, result) {
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

    
    this.update = function (region, res) {
        var values = [region.name, region.initials, region.id];

        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'UPDATE region set name = ?, ' +
                        'initials  = ? '               +
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
            var query = 'DELETE FROM region '    +
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

module.exports = new RegionModel();