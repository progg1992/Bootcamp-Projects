DROP DATABASE burgers_db IF EXISTS
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(40),
    devoured BOOLEAN
);