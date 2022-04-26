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