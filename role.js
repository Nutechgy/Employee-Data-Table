ROLE.js
const sequelize = require ('./config/connection')
const viewRole = async () => {
  const result = await sequelize.query("SELECT * FROM role")
  console.log(result[0])
}
module.exports = {
  viewRole
}
// app.js

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

// app.js

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
