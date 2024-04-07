# Employee-Data-Table
<video controls src="20240325-1707-27.9092000.mp4" title="Emplyee-Table-Data"></video>

"C:\Users\terem\OneDrive\Pictures\Screenshots\Recording 2024-03-25 131250.mp4"

A command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.
Walk through video domonstarating of me creating a table data of employees for .
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

https://1drv.ms/v/s!Alsgg17rEtJzgaU84vlTjPlUewbKbw?e=rByeLw

# Employee Tracker

This command-line application allows business owners to view and manage departments, roles, and employees in their company's database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/employee-tracker.git
Navigate to the Project Directory:

bash
cd employee-tracker
Install Dependencies:

bash
Copy code
npm install
Set Up Database:

Ensure MySQL is installed on your machine.
Create a new MySQL database.
Run the SQL commands in the schema.sql file to create the necessary tables.
Configure Environment Variables:

Create a .env file in the project root.
Add your MySQL database credentials to the .env file:
makefile
Copy code
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_DATABASE=employee_tracker
Usage
To start the application, run:

bash
Copy code
node app.js
Follow the prompts to interact with the database and manage departments, roles, and employees.

Walkthrough Video
Watch the Walkthrough Video

The video demonstrates the functionality of the employee tracker, including:

Invoking the application from the command line.
Functional menu with options to view departments, roles, and employees, add departments, roles, and employees, and update employee roles.
Technical Details
Dependencies:

Uses the Inquirer package to interact with the user via the command line.
Uses the MySQL2 package to connect to a MySQL database.
Database Schema:

Follows the table schema outlined in the schema.sql file.
Contributing
Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License.

css
Copy code

Replace the placeholder text (e.g., `your-username`, `link-to-your-video`) with appropriate values specific to your project. This README template provides installation instructions, usage guidelines, information about the walkthrough video, technical details, contribution guidelines, and licensing details. Make sure to include a link to your walkthrough video demonstrating the functionality of the employee tracker as specified in the acceptance criteria.




