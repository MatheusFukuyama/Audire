var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableMessage(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     donation (\n"                               +
                "id                int          NOT NULL AUTO_INCREMENT,\n"                 +
                "senderId          int          NOT NULL,\n"                                +
                "receiverId        int          NOT NULL,\n"                                +
                "donationId        int          NOT NULL,\n"                                +
                "date              timeStamp    NOT NULL,\n"                                +
                "subject           varchar(200) NOT NULL,\n"                                +
                "text              text         NOT NULL,\n"                                +
                "PRIMARY KEY (id),\n"                                                       +
                "FOREIGN KEY MESSAGE_USER_FK_01(senderId) references user(id),\n"           +
                "FOREIGN KEY MESSAGE_USER_FK_02(receiverId) references user(id),\n"         +
                "FOREIGN KEY MESSAGE_DONATION_FK_01(donationId) references donation(id),\n" +
                "UNIQUE MESSAGE_UK_01(donationId, id),\n"                                   +
                "UNIQUE MESSAGE_UK_02(senderId, id),\n"                                     +
                "UNIQUE MESSAGE_UK_03(receiverId,  id)\n"                                   +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela Message!');
            //addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO message(senderId, receiberId, donationId, date, subject, text) VALUES ?";
    const values = [
          [1,2,1,date,'Subject 01','text text text'],
          [1,3,1,date,'Subject Subject','texte']
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela Message!');
            con.release();
        });
    });


}
