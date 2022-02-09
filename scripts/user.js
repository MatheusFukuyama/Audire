var connection = require('../connections/MySQLConnect');

exports.createTable = function createTableUser(){ 
    const sql = "CREATE TABLE IF NOT EXISTS     user (\n"                   +
                "id                int          NOT NULL AUTO_INCREMENT,\n" +
                "name              varchar(200) NOT NULL,\n"                +
                "email             varchar(200) NOT NULL,\n"                +
                "celPhone          varchar(20)  NOT NULL,\n"                +
                "birthDate         date         NOT NULL,\n"                +
                "registrationDate  date         NOT NULL,\n"                +
                "password          varchar(200) NOT NULL,\n"                +
                "PRIMARY KEY (id),\n"                                       +
                "UNIQUE USER_UK_01(email)\n"                                +
                ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Criou a Tabela User!');
            addRows();
            con.release();
        });
    });
}


function addRows(){
    const sql = "INSERT INTO user(name,email,celPhone,birthDate,registrationDate,password) VALUES ?";
    const values = [
          ['helen','hemilen1964@terra.com.br','(18) 99125-0603',date,date,'testeteste'],
          ['miguel','josemiguelsabio@gmail.com','(18) 99125-0679',date,date,'testeteste'],
          ['gabriel','gabriefreitas@gmail.com','(18) 99999-2995',date,date,'testeteste']
        ];
        
    connection.init();

    connection.acquire(function (error, con) {
        con.query(sql, [values], function (error, results, fields) {
            if(error) {
                con.release();
                return console.log(error);
            }
            console.log('Inseriu linhas na Tabela User!');
            con.release();
        });
    });


}

/*
CREATE TABLE 'users' (
  'UserID' int(11) NOT NULL AUTO_INCREMENT,
  'Name' varchar(45) DEFAULT NULL,
  PRIMARY KEY ('UserID')
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
*/
