var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableTransaction(){
    const sql = "CREATE TABLE IF NOT EXISTS      transaction (\n"            +
                "id                int(11)       NOT NULL AUTO_INCREMENT,\n" +
                "userId            int(11)       NOT NULL,\n"                +
                "transactionAmount decimal(10,2) DEFAULT NULL,\n"            +
                "balance           decimal(10,2) DEFAULT NULL,\n"            +
                "transactionDate   date          DEFAULT NULL,\n"            +
                "PRIMARY KEY (id)\n"                                         +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Transaction!');
            addRows();
            con.release();
        });
    });


}

/*
CREATE TABLE 'transactions' (
    'id'                int(11)       NOT NULL AUTO_INCREMENT,
    'userId'            int(11)       DEFAULT NULL,
    'transactionAmount' decimal(10,2) DEFAULT NULL,
    'balance'           decimal(10,2) DEFAULT NULL,
    'transactionDate'   date          DEFAULT NULL,
    PRIMARY KEY ('id')
  ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
*/


function addRows(){
    const sql = "INSERT INTO transaction(userId, transactionamount, balance, transactionDate) VALUES ?";
    var now   = new Date;
    const values = [
          [4,1000,5000,now],
          [5,2000,1000,now],
          [6,1500,3000,now]
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Transaction!');
            con.release();
        });
    });
}
