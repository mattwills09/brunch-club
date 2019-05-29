CREATE DATABASE brunchclub_db;
USE brunchclub_db;

CREATE TABLE events
(
	id int NOT NULL AUTO_INCREMENT,
	venue varchar(255) NOT NULL,
	theme varchar(255) NOT NULL,
    date_time DATETIME(6) NOT NULL,
    specials VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    neighborhood VARCHAR(155) NOT NULL,
    food_type VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);