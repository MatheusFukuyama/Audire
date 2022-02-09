var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableHistorical(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     historical (\n"                                +
                "id                int          NOT NULL AUTO_INCREMENT,\n"                    +
                "donationId        int          NOT NULL,\n"                                   +
                "status            int          NOT NULL,\n"                                   +
                "date              timeStamp    NOT NULL,\n"                                   +
                "PRIMARY KEY (id),\n"                                                          +
                "FOREIGN KEY HISTORICAL_DONATION_FK_01(donationId) references donation(id),\n" +
                "UNIQUE INTERESTED_UK_01(donationId, id)\n"                                    +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Historical!');
            //addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO historical(donationId, status, date) VALUES ?";
    const values = [
          [1,1,date],
          [1,2,date]
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Historical!');
            con.release();
        });
    });


}
