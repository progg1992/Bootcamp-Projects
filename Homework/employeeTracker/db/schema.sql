DROP DATABASE IF EXISTS Employees;

CREATE DATABASE Employees;

USE Employees;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    INDEX dept_ind (department_id)
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT Primary Key,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    INDEX role_ind (role_id),
    manager_id INT UNSIGNED,
    INDEX man_ind (manager_id)
);

ALTER TABLE role
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) REFERENCES department(id)
ON DELETE CASCADE;

ALTER TABLE employee
ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
ON DELETE CASCADE;

ALTER TABLE employee
ADD CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
ON DELETE SET NULL;