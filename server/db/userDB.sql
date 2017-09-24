DROP DATABASE IF EXISTS userDB;
CREATE DATABASE userDB;
USE userDB;

drop table if exists Users; 
CREATE TABLE Users
(
	id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    user_password varchar(255) Not Null,
    salt varchar(255) NOT NULL,
	company_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(10) NOT NULL,
    state varchar(2) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT NOW(),
    updatedAt DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);
Drop table if exists Leads;
CREATE TABLE Leads
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(10) NOT NULL,
    contacted boolean default NULL,
    converted boolean default NULL,
    address varchar(255) default NULL,
    city varchar(255) NOT NULL,
    state varchar(2)  NOT NULL,
    zip varchar(12)  NOT NULL,
	createdAt DATETIME NOT NULL DEFAULT NOW(),
    updatedAt DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);


INSERT  INTO Users (user_name, user_password, salt, company_name, email, phone, state, createdAt, updatedAt) VALUES ('AlexUser', 'AlexPass', 'salt','Solar Town', 'alexhimchak@gmail.com', '1234567890', "CA", NOW(), NOW());
INSERT  INTO Users (user_name, user_password, salt, company_name, email, phone, state, createdAt, updatedAt) VALUES ('SungUser', 'SungPass', 'salt','Solarize', 'sungwoo@gmail.com', '1234567890', "CA", NOW(), NOW());
INSERT  INTO Users (user_name, user_password, salt, company_name, email, phone, state, createdAt, updatedAt) VALUES ('daveuser', 'davepass', 'salt','Sunny USA', 'david@gmail.com', '1234567890', "ME", NOW(), NOW());
INSERT  INTO Users (user_name, user_password, salt, company_name, email, phone, state, createdAt, updatedAt) VALUES ('tomuser', 'tompass', 'salt','Energy Creators', 'tom@gmail.com', '1234567890', 'CA', NOW(), NOW());
INSERT  INTO Leads (first_name, last_name, email, phone, contacted, converted, address, city, state, zip, createdAt, updatedAt) VALUES ('John', 'Red', 'johnred@gmail.com', '1234567890', false, false, '12345 jr Lane', 'San Diego', 'CA', '92037', NOW(), NOW());
INSERT  INTO Leads (first_name, last_name, email, phone, contacted, converted, address, city, state, zip, createdAt, updatedAt) VALUES ('Mike', 'Blue', 'mikeblue@gmail.com', '31234567890', false, false, '12345 mb Lane', 'Portland', 'ME', '25751', NOW(), NOW());
INSERT  INTO Leads (first_name, last_name, email, phone, contacted, converted, address, city, state, zip, createdAt, updatedAt) VALUES ('Dan', 'Yellow', 'danyellow@aol.com', '1234567890', true, false, '12345 dy Lane', 'San Diego', 'CA', '91941', NOW(), NOW());
INSERT  INTO Leads (first_name, last_name, email, phone, contacted, converted, address, city, state, zip, createdAt, updatedAt) VALUES ('Rob', 'Purple', 'robpurple@gmail.com', '1234567890', false, true, '12345 jr Lane', 'San Diego', 'CA', '92104', NOW(), NOW());
