// app.js

const pool = require('./db'); // Import the database connection

async function viewAllDepartments() {
  try {
    // Query to select all department from the database
    const query = 'SELECT * FROM department';

    // Execute the query
    const result = await pool.query(query);

    // Display department in a formatted table
    console.table(result.rows);
  } catch (error) {
    console.error('Error retrieving department:', error);
  }
}

// Call the function to view all department
viewAllDepartments();

// app.js

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
    const query = 'INSERT INTO department (name) VALUES ($1)';
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
