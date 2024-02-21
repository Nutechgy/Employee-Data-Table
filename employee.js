const { default: inquirer } = require('inquirer')
const sequelize = require ('./config/connection')
const viewEmployee = async () => {
  const result = await sequelize.query("SELECT * FROM employee")
  console.log(result[0])
}
// app.js

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
