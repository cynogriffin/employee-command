// import mysql2
const mysql = require('mysql2');
// import inquirer
const inquirer = require('inquirer');
// import console.table
const consTable = require('console.table');

require('dotenv').config()

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PW,
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    welcome();
});

// runs after connection is established
welcome = () => {
    console.log('_-_-_-_-_-_-_-_-_-_-_-')
    console.log('-_-EMPLOYEE COMMAND-_-')
    console.log('_-_-_-_-_-_-_-_-_-_-_-')
    promptUser();
};

// promt for starting action
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Update an employee manager',
                'Exit'
            ]
        }
    ])
        .then((answer) => {
            
            switch(answer) {
                case('View all departments'):
                    showDepartments();
                    break;
                case('View all roles'):
                    showRoles();
                    break;
                case('View all employees'):
                    showEmployees();
                    break;
                case('Add a department'):
                    addDepartment();
                    break;
                case('Add a role'):
                    addRole();
                    break;
                case('Add an employee'):
                    addEmployee();
                    break;
                case('Update an employee role'):
                    updateRole();
                    break;
                case('Update an employee manager'):
                    updateManager();
                    break;
                case('Exit'):
                    connection.end();
                    break;
            };
        });
};

// view all departments
showDepartments = () => {
    console.log('Currently viewing all departments...');

    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

// view all roles
showRoles = () => {
    console.log('Currently viewing all roles...');

    const sql = `
        SELECT role.id, role.title, department.name AS department FROM role 
        INNER JOIN department ON role.department_id = department.id
    `;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

// view all employees
showEmployees = () => {
    console.log('Currently viewing all employees...');

    const sql = `
        SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id
    `;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

// add a department
addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: 'What department would you like to add?',
            validate: addDept => {
                if (addDept) {
                    return true;
                } else {
                    console.log('Please enter a department');
                    return false;
                }
            }
        }
    ])
        .then(answer => {
            const sql = `INSERT INTO department (name)
                        VALUES (?)`;
            connection.query(sql, answer.addDept, (err, result) => {
                if (err) throw err;
                console.log('Added ' + answer.addDept + " to departments!");

                showDepartments();
            });
        });
};

// add a role
addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What role would you like to add?',
            validate: addRole => {
                if (addRole) {
                    return true;
                } else {
                    console.log('Please enter a role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of this role?',
            validate: addSalary => {
                if (isNaN(addSalary)) {
                    return true;
                } else {
                    console.log('Please enter a salary');
                    return false;
                }
            }
        }
    ])
        .then(answer => {
            const params = [answer.role, answer.salary];

            // get the department from table
            const roleSql = `SELECT name, id FROM department`;

            connection.promise().query(roleSql, (err, data) => {
                if (err) throw err;

                const dept = data.map(({ name, id }) => ({ name: name, value: id }));

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'dept',
                        message: "What department is this role in?",
                        choices: dept
                    }
                ])
                    .then(deptChoice => {
                        const dept = deptChoice.dept;
                        params.push(dept);

                        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

                        connection.query(sql, params, (err, result) => {
                            if (err) throw err;
                            console.log('Added ' + answer.role + ' to roles!');

                            showRoles();
                        });
                    });
            });
        });
};

