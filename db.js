// src/db.js
const { Pool } = require('pg');

// Create a new Pool instance with your database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employeein',
  password: 'Password',
  port: 5432, // Default Postgres port
});

module.exports = pool;
