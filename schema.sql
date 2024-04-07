-- Create departments table
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,              -- Unique identifier for the department
    name VARCHAR(255) NOT NULL         -- Name of the department
);

-- Create roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,              -- Unique identifier for the role
    title VARCHAR(255) NOT NULL,        -- Title of the role
    salary DECIMAL(10, 2) NOT NULL,     -- Salary for the role
    department_id INT NOT NULL,         -- Foreign key referencing the department the role belongs to
    FOREIGN KEY (department_id) REFERENCES departments(id)  -- Define foreign key constraint
);

-- Create employees table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,              -- Unique identifier for the employee
    first_name VARCHAR(255) NOT NULL,   -- Employee's first name
    last_name VARCHAR(255) NOT NULL,    -- Employee's last name
    role_id INT NOT NULL,               -- Foreign key referencing the role of the employee
    manager_id INT,                     -- Foreign key referencing the manager of the employee (optional)
    FOREIGN KEY (role_id) REFERENCES roles(id),            -- Define foreign key constraint for role_id
    FOREIGN KEY (manager_id) REFERENCES employees(id)      -- Define foreign key constraint for manager_id
);
