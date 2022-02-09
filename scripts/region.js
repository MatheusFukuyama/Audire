var   connection = require('../connections/MySQLConnect');

exports.createTable = function createTableRegion(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     region (\n"                         +
                "id                int          NOT NULL AUTO_INCREMENT,\n"         +
                "name              varchar(50)  NOT NULL,\n"                        +
                "initials          varchar(2)   NOT NULL,\n"                        +
                "PRIMARY KEY (id),\n"                                               +
                "UNIQUE REGION_UK_01(name),\n"                                      +
                "UNIQUE REGION_UK_02(initials)\n"                                   +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Region!');
            addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO region(name, initials) VALUES ?";
    const values = [
          ['Sudeste','SE'],
          ['Norte','N'],
          ['Nordeste','NE'],
          ['Centro-Oeste','CO'],
          ['Sul','S']
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Region!');
            con.release();
        });
    });


}
