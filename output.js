// output.js

const Table = require('cli-table');

function formatDataAsTable(data) {
    // Create a new table instance
    const table = new Table({
        head: ['ID', 'Name', 'Age'],
        colWidths: [10, 20, 10]
    });

    // Add rows to the table
    data.forEach(row => {
        table.push(row);
    });

    // Return the formatted table
    return table.toString();
}

module.exports = { formatDataAsTable };
