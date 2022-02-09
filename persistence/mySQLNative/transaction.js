/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data
var connection = require('../connections/MySQLConnect');

function Transaction() {

    // get all users data 
    this.getAll = function (res) {
        // initialize database connection
        connection.init();

        // calling acquire methods and passing callback method that will be execute query
        // return response to server 
        connection.acquire(function (err, con) {
            con.query('SELECT * FROM transaction', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.getById = function (id, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT date_format(t.transactionDate,\'%d-%b-%Y\') as date, '   +
                        '       CASE WHEN t.transactionAmount >= 0 '                     + 
                        '            THEN t.transactionAmount '                          +
                        '            ELSE 0  '                                           + 
                        '       END  AS Credit, '                                        + 
                        '       CASE WHEN t.transactionAmount < 0 '                      + 
                        '            THEN t.TransactionAmount '                          +
                        '            ELSE 0 '                                            +
                        '       END  AS Debit, '                                         +
                        '       t.balance, '                                             + 
                        '       u.name '                                                 + 
                        'FROM   transaction t '                                          +
                        'INNER  JOIN user u ON t.userId = u.id '                         +
                        'WHERE  t.id = ?;';
            con.query(query, id, function (err, result) {
                    con.release();
                    res.send(result);
                });
        });
    };

    this.getByIdUser = function (id, res) {
        // initialize database connection
        connection.init();

        // get id as parameter to passing into query and return filter data
        connection.acquire(function (err, con) {
            var query = 'SELECT date_format(t.transactionDate,\'%d-%b-%Y\') as date, '   +
                        '       CASE WHEN t.transactionAmount >= 0 '                     + 
                        '            THEN t.transactionAmount '                          +
                        '            ELSE 0  '                                           + 
                        '       END  AS Credit, '                                        + 
                        '       CASE WHEN t.transactionAmount < 0 '                      + 
                        '            THEN t.TransactionAmount '                          +
                        '            ELSE 0 '                                            +
                        '       END  AS Debit, '                                         +
                        '       t.balance '                                              + 
                        'FROM   transaction t '                                          +
                        'INNER  JOIN user u ON t.userId = u.id '                         +
                        'WHERE  t.userId = ?;';
            con.query(query, id, function (err, result) {
                    con.release();
                    res.send(result);
                });
        });
    };

}

module.exports = new Transaction();