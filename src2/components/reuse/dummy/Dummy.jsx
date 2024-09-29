import React from 'react';

const BlackRed = ({ historyData }) => {
  let columns = [[]]; // Start with the first empty column
  let currentColumn = 0; // Track the current column we are adding to

  historyData.forEach((data) => {
    // If the color is red, add it to the current column
    if (data.color === 'red') {
      if (columns[currentColumn].length === 0 || columns[currentColumn].includes('black')) {
        // Create a new column if current column contains black or is empty
        columns.push([]);
        currentColumn++;
      }
      // Push 'red' into the current column
      columns[currentColumn].push('red');
    } 
    // If the color is black, add it to the next column
    else if (data.color === 'black') {
      // If there's already black in this column, push it below
      if (columns[currentColumn].includes('red')) {
        // Create a new column if the current column contains red
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push('black');
    }
  });

  // Find the maximum number of rows to handle uneven column heights
  const maxRows = Math.max(...columns.map((col) => col.length));

  return (
    <div>
      {/* Iterate over the rows */}
      {Array.from({ length: maxRows }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', gap: '20px' }}>
          {/* Iterate over the columns */}
          {columns.map((col, colIndex) => (
            <div key={colIndex} style={{ width: '50px', textAlign: 'center' }}>
              {/* Display the value if it exists, else show empty */}
              {col[rowIndex] || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlackRed;
