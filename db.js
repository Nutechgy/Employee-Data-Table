// src/db.js
const { Pool } = require('pg');

// Create a new Pool instance with your database connection details
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'employee_tracker',
  password: 'your_password',
  port: 5432, // Default Postgres port
});

module.exports = pool;
