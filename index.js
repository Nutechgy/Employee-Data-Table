// index.js
const { startApp } = require('./src/app');

// Start your application
startApp();
// app.js or index.js

const { formatDataAsTable } = require('./output');

// Sample data
const data = [
    [1, 'John Doe', 30],
    [2, 'Jane Smith', 25],
    [3, 'Alex Johnson', 40]
];

// Format data as a table
const formattedTable = formatDataAsTable(data);

// Display the formatted table
console.log(formattedTable);
