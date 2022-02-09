var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableProduct(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     product (\n"                   +
                "id                int          NOT NULL AUTO_INCREMENT,\n" +
                "name              varchar(200) NOT NULL,\n"                +
                "PRIMARY KEY (id)\n"                                         +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Product!');
            addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO product(name) VALUES ?";
    const values = [
          ['cimento'],
          ['cal'],
          ['tijolo']
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Product!');
            con.release();
        });
    });


}

/*
CREATE TABLE 'product' (
  'id'   int(11) NOT NULL AUTO_INCREMENT,
  'Name' varchar(45) DEFAULT NULL,
  PRIMARY KEY ('id')
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
*/
