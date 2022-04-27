INSERT INTO department (dep_name)
VALUES
('IT'),
('Finance'),
('Sales'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Junior Developer', 60000, 1),
('Software Engineer', 120000, 1),
('Accountant', 100000, 2),
('Financial Analyst', 140000, 2),
('Market Coordinator', 70000, 3),
('Sales Lead', 90000, 3),
('Project Manager', 130000, 4),
('Operations Manager', 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Cody', 'Griffin', 3, null),
('DJ', 'Williams', 1, 1),
('Emily', 'Anderson', 2, 1),
('Jonathan', 'Brown', 5, null),
('Christopher', 'Lee', 4, 4),
('Bryan', 'Sanderson', 7, null),
('Tristan', 'Roberts', 6, 6),
('Joel', 'Jones', 8, null),
('Malory', 'Martin', 9, 8);