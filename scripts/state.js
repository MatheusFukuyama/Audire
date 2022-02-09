var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableState(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     state (\n"                          +
                "id                int          NOT NULL AUTO_INCREMENT,\n"         +
                "name              varchar(200) NOT NULL,\n"                        +
                "initials          varchar(2)   NOT NULL,\n"                        +
                "regionId          int          NOT NULL,\n"                        +
                "PRIMARY KEY (id),\n"                                               +
                "FOREIGN KEY STATE_REGION_FK_01(regionId) references region(id),\n" +
                "UNIQUE STATE_UK_01(name),\n"                                       +
                "UNIQUE STATE_UK_02(initials)\n"                                    +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela State!');
            addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO state(name, initials) VALUES ?";
    const values = [
          ['São Paulo','SP',1],
          ['Rio de Janeiro','RJ',1],
          ['Acre','AC',2]
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela State!');
            con.release();
        });
    });


}
