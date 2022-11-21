INSERT INTO department (name)
VALUES
('IT'),
('Human Resources'),
('Engineering'),
('Client Relations');

INSERT INTO role (title, salary, department_id)
VALUES 
('Technical Support Rep', 35000, 1),
('Technical Support Manager', 60000, 1),
('HR Assistant', 25000, 2),
('HR Manager', 40000, 2),
('Junior Software Engineer', 45000, 3),
('Senior Software Engineer', 75000, 3),
('Customer Care Rep', 21000, 4),
('Team Lead', 29000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Blutarsky', 1, 1),
('Eric', 'Stratton', 2, NULL),
('Chip', 'Diller', 3, 2),
('Lawrence', 'Kroger', 4, NULL),
('Daniel', 'Simpson', 5, 3),
('Doug', 'Neidermeyer', 6, NULL),
('Vernon', 'Wormer', 7, 7),
('Marion', 'Wormer', 8, NULL);