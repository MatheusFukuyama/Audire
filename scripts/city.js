var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableCity(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     city (\n"                       +
                "id                int          NOT NULL AUTO_INCREMENT,\n"     +
                "name              varchar(200) NOT NULL,\n"                    +
                "stateId           int          NOT NULL,\n"                    +
                "PRIMARY KEY (id),\n"                                           +
                "FOREIGN KEY CITY_STATE_FK_01(stateId) references state(id),\n" +
                "UNIQUE CITY_UK_01(name, stateId),\n"                           +
                "UNIQUE CITY_UK_02(stateId, name)\n"                            +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela City!');
            addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO city(name, stateId) VALUES ?";
    const values = [
          ['Araçatuba',1],
          ['Birigui',1],
          ['Itanhaém',1],
          ['Rio de Janeiro',2],
          ['Rio Branco',3]
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela City!');
            con.release();
        });
    });


}
