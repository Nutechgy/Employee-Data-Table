// src/app.js
const inquirer = require('inquirer');
const pool = require('./db');//import database connection

async function viewAllDepartments() {
    try {
      // Query to select all departments from the database
      const query = 'SELECT * FROM departments';
  
      // Execute the query
      const result = await pool.query(query);
  
      // Display departments in a formatted table
      console.table(result.rows);
    } catch (error) {
      console.error('Error retrieving departments:', error);
    }
  }
  
  // Call the function to view all departments
  viewAllDepartments();

const inquirer = require('inquirer');

async function addDepartment() {
  try {
    // Prompt the user for the new department name
    const { departmentName } = await inquirer.prompt({
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the new department:',
    });

    // Query to insert the new department into the database
    const query = 'INSERT INTO departments (name) VALUES ($1)';
    const values = [departmentName];

    // Execute the query
    await pool.query(query, values);

    console.log('New department added successfully!');
  } catch (error) {
    console.error('Error adding department:', error);
  }
}

// Call the function to add a department
addDepartment();


// Your application logic 

const Table = require('cli-table');

// Sample data
const data = [
    [1, 'John Doe', 30],
    [2, 'Jane Smith', 25],
    [3, 'Alex Johnson', 40]
];

// Create a new table instance
const table = new Table({
    head: ['ID', 'Name', 'Age'],
    colWidths: [10, 20, 10]
});

// Add rows to the table
data.forEach(row => {
    table.push(row);
});

// Display the table
console.log(table.toString());


async function viewAllRoles() {
    try {
      // Query to select all roles with department information
      const query = `
        SELECT roles.id, roles.title, roles.salary, departments.name AS department
        FROM roles
        INNER JOIN departments ON roles.department_id = departments.id
      `;
  
      // Execute the query
      const result = await pool.query(query);
  
      // Display roles in a formatted table
      console.table(result.rows);
    } catch (error) {
      console.error('Error retrieving roles:', error);
    }
  }
  
  // Call the function to view all roles
  viewAllRoles();

//function to add role
async function addRole() {
    try {
      // Prompt the user for role details
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
  
      // Query to insert the new role into the database
      const query = 'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)';
      const values = [title, salary, departmentId];
  
      // Execute the query
      await pool.query(query, values);
  
      console.log('New role added successfully!');
    } catch (error) {
      console.error('Error adding role:', error);
    }
  }
  
  // Call the function to add a role
  addRole();
  

async function viewAllEmployees() {
    try {
      // Query to select all employees with role and department information
      const query = `
        SELECT employees.id, employees.first_name, employees.last_name, 
               roles.title AS role, roles.salary, 
               departments.name AS department
        FROM employees
        INNER JOIN roles ON employees.role_id = roles.id
        INNER JOIN departments ON roles.department_id = departments.id
      `;
  
      // Execute the query
      const result = await pool.query(query);
  
      // Display employees in a formatted table
      console.table(result.rows);
    } catch (error) {
      console.error('Error retrieving employees:', error);
    }
  }
  
  // Call the function to view all employees
  viewAllEmployees();
  
  // app.js

async function addEmployee() {
    try {
      // Prompt the user for employee details
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
  
      // Query to insert the new employee into the database
      const query = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
      const values = [firstName, lastName, roleId, managerId];
  
      // Execute the query
      await pool.query(query, values);
  
      console.log('New employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }
  
  // Call the function to add an employee
  addEmployee();
  
  // app.js

async function updateEmployeeRole() {
    try {
      // Prompt the user for employee and role details
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
  
      // Query to update the employee's role in the database
      const query = 'UPDATE employees SET role_id = $1 WHERE id = $2';
      const values = [roleId, employeeId];
  
      // Execute the query
      await pool.query(query, values);
  
      console.log('Employee role updated successfully!');
    } catch (error) {
      console.error('Error updating employee role:', error);
    }
  }
  
  // Call the function to update an employee role
  updateEmployeeRole();
  