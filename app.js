// app.js

// Load environment variables from .env file
require('dotenv').config();

const inquirer = require('inquirer');
const pool = require('./db');
const { formatDataAsTable } = require('./output');

async function mainMenu() {
    try {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all department',
                'View all role',
                'View all employee',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        });

        switch (choice) {
            case 'View all department':
                await viewAllDepartments();
                break;
            case 'View all role':
                await viewAllRoles();
                break;
            case 'View all employee':
                await viewAllEmployees();
                break;
            case 'Add a department':
                await addDepartment();
                break;
            case 'Add a role':
                await addRole();
                break;
            case 'Add an employee':
                await addEmployee();
                break;
            case 'Update an employee role':
                await updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Goodbye!');
                pool.end(); // Close the database connection
                break;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function viewAllDepartments() {
    try {
        const query = 'SELECT * FROM department';
        const result = await pool.query(query);
        console.table(result.rows);
    } catch (error) {
        console.error('Error retrieving department:', error);
    }
    mainMenu();
}

async function viewAllRoles() {
    try {
        const query = `
            SELECT role.id, role.title, role.salary, department.name AS department
            FROM role
            INNER JOIN department ON role.department_id = department.id
        `;
        const result = await pool.query(query);
        console.table(result.rows);
    } catch (error) {
        console.error('Error retrieving role:', error);
    }
    mainMenu();
}

async function viewAllEmployees() {
    try {
        const query = `
            SELECT employee.id, employee.fname, employee.lname, 
                   role.title AS role, role.salary, 
                   department.name AS department
            FROM employee
            INNER JOIN role ON employee.role_id = role.id
            INNER JOIN department ON role.department_id = department.id
        `;
        const result = await pool.query(query);
        console.table(result.rows);
    } catch (error) {
        console.error('Error retrieving employee:', error);
    }
    mainMenu();
}

async function addDepartment() {
    try {
        const { departmentName } = await inquirer.prompt({
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the new department:',
        });
        const query = 'INSERT INTO department (name) VALUES ($1)';
        const values = [departmentName];
        await pool.query(query, values);
        console.log('New department added successfully!');
    } catch (error) {
        console.error('Error adding department:', error);
    }
    mainMenu();
}

async function addRole() {
    try {
        const { title, salary, departmentId } = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the new role:',
            },
            {
                type: 'number',
                name: 'salary',
                message: 'Enter the salary for the new role:',
            },
            {
                type: 'number',
                name: 'departmentId',
                message: 'Enter the department ID for the new role:',
            },
        ]);
        const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
        const values = [title, salary, departmentId];
        await pool.query(query, values);
        console.log('New role added successfully!');
    } catch (error) {
        console.error('Error adding role:', error);
    }
    mainMenu();
}

async function addEmployee() {
    try {
        const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the first name of the new employee:',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the last name of the new employee:',
            },
            {
                type: 'number',
                name: 'roleId',
                message: 'Enter the role ID for the new employee:',
            },
            {
                type: 'number',
                name: 'managerId',
                message: 'Enter the manager ID for the new employee:',
            },
        ]);
        const query = 'INSERT INTO employee (fname, lname, role_id, manager_id) VALUES ($1, $2, $3, $4)';
        const values = [firstName, lastName, roleId, managerId];
        await pool.query(query, values);
        console.log('New employee added successfully!');
    } catch (error) {
        console.error('Error adding employee:', error);
    }
    mainMenu();
}

async function updateEmployeeRole() {
    try {
        const { employeeId, roleId } = await inquirer.prompt([
            {
                type: 'number',
                name: 'employeeId',
                message: 'Enter the ID of the employee to update:',
            },
            {
                type: 'number',
                name: 'roleId',
                message: 'Enter the new role ID for the employee:',
            },
        ]);
        const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
        const values = [roleId, employeeId];
        await pool.query(query, values);
        console.log('Employee role updated successfully!');
    } catch (error) {
        console.error('Error updating employee role:', error);
    }
    mainMenu();
  }
  // Call the mainMenu function start the application
  module.exports = mainMenu