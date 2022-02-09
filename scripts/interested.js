var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableInterested(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     interested (\n"                                +
                "id                int          NOT NULL AUTO_INCREMENT,\n"                    +
                "userId            int          NOT NULL,\n"                                   +
                "donationId        int          NOT NULL,\n"                                   +
                "recordDate        timeStamp    NOT NULL,\n"                                   +
                "selected          varchar(1)   NOT NULL,\n"                                   +
                "PRIMARY KEY (id),\n"                                                          +
                "FOREIGN KEY INTERESTED_USER_FK_01(userId) references user(id),\n"             +
                "FOREIGN KEY INTERESTED_DONATION_FK_01(donationId) references donation(id),\n" +
                "UNIQUE INTERESTED_UK_01(userId, id),\n"                                       +
                "UNIQUE INTERESTED_UK_02(donationId, id)\n"                                    +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Interested!');
            //addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO interested(userId, donationId, recordDate, selected) VALUES ?";
    const values = [
          [1,1,date,'N'],
          [2,1,date,'N']
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Interested!');
            con.release();
        });
    });


}
