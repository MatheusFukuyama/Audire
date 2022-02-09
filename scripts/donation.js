var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableDonation(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     donation (\n"                             +
                "id                int          NOT NULL AUTO_INCREMENT,\n"               +
                "qtt               double       NOT NULL,\n"                              +
                "date              timeStamp    NOT NULL,\n"                              +
                "status            int          NOT NULL,\n"                              +
                "description       text         NOT NULL,\n"                              +
                "userId            int          NOT NULL,\n"                              +
                "productId         int          NOT NULL,\n"                              +
                "PRIMARY KEY (id),\n"                                                     +
                "FOREIGN KEY DONATION_USER_FK_01(userId) references user(id),\n"          +
                "FOREIGN KEY DONATION_PRODUCT_FK_01(productId) references product(id),\n" +
                "UNIQUE DONATION_UK_01(userId, id),\n"                                    +
                "UNIQUE DONATION_UK_02(productId, id),\n"                                 +
                "UNIQUE DONATION_UK_03(status, id),\n"                                    +
                "UNIQUE DONATION_UK_04(userId, status, id)\n"                             +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Donation!');
            //addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO donation(qtt, date, status, description, userId, productId) VALUES ?";
    const values = [
          [10,date,1,'description',1,1],
          [15,date,1,'description',1,2]
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Description!');
            con.release();
        });
    });


}
