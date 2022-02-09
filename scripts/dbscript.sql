CREATE DATABASE  IF NOT EXISTS `gheltco_cuidacidadao` 
USE 'gheltco_cuidacidadao';
--
-- Table structure for table 'transactions'
--
DROP TABLE IF EXISTS 'transactions'
CREATE TABLE 'transactions' (
  'TransactionId' int(11) NOT NULL AUTO_INCREMENT,
  'UserId' int(11) DEFAULT NULL,
  'TransactionAmount' decimal(10,2) DEFAULT NULL,
  'Balance' decimal(10,2) DEFAULT NULL,
  'TransactionDate' date DEFAULT NULL,
  PRIMARY KEY ('TransactionId')
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Table structure for table 'users'
--
DROP TABLE IF EXISTS 'users';
CREATE TABLE 'users' (
  'UserID' int(11) NOT NULL AUTO_INCREMENT,
  'Name' varchar(45) DEFAULT NULL,
  PRIMARY KEY ('UserID')
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;