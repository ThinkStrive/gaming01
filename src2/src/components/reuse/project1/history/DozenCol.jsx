import React from "react";

const DozenCol = ({ historyData }) => {
  // Initializing an empty grid with 7 rows for Dozen 1-3, Zero, and Column 1-3
  const grid = Array(7)
    .fill(null)
    .map(() => []);

  let currentColumn = 0; // Track the current column for placing data

  // Loop through history data to place items into the grid
  historyData.forEach((data) => {
    // Handle zero case - add green circle on the fourth row (index 3)
    if (data.color === "zero") {
      grid[3][currentColumn] = "zero"; // Zero row
      // Ensure other rows in the same column are empty
      grid[0][currentColumn] = "";
      grid[1][currentColumn] = "";
      grid[2][currentColumn] = "";
      grid[4][currentColumn] = "";
      grid[5][currentColumn] = "";
      grid[6][currentColumn] = "";
      currentColumn++;
    } else {
      // Handle dozen placement
      if (data.dozen === "1st") {
        grid[0][currentColumn] = "dozen"; // Dozen 1 (row 0)
        grid[1][currentColumn] = ""; // Empty the 2nd dozen row for this column
        grid[2][currentColumn] = ""; // Empty the 3rd dozen row for this column
      } else if (data.dozen === "2nd") {
        grid[0][currentColumn] = ""; // Empty the 1st dozen row for this column
        grid[1][currentColumn] = "dozen"; // Dozen 2 (row 1)
        grid[2][currentColumn] = ""; // Empty the 3rd dozen row for this column
      } else if (data.dozen === "3rd") {
        grid[0][currentColumn] = ""; // Empty the 1st dozen row for this column
        grid[1][currentColumn] = ""; // Empty the 2nd dozen row for this column
        grid[2][currentColumn] = "dozen"; // Dozen 3 (row 2)
      }

      // Handle column placement
      if (data.column === "1st") {
        grid[4][currentColumn] = "column"; // Column 1 (row 4)
        grid[5][currentColumn] = ""; // Empty the 2nd column row for this column
        grid[6][currentColumn] = ""; // Empty the 3rd column row for this column
      } else if (data.column === "2nd") {
        grid[4][currentColumn] = ""; // Empty the 1st column row for this column
        grid[5][currentColumn] = "column"; // Column 2 (row 5)
        grid[6][currentColumn] = ""; // Empty the 3rd column row for this column
      } else if (data.column === "3rd") {
        grid[4][currentColumn] = ""; // Empty the 1st column row for this column
        grid[5][currentColumn] = ""; // Empty the 2nd column row for this column
        grid[6][currentColumn] = "column"; // Column 3 (row 6)
      }

      currentColumn++;
    }
  });

  // Determine max columns to render
  const maxColumns = Math.max(...grid.map((row) => row.length));

  return (
    <div>
      {/* Rendering labels for each row */}
      {[
        "Dozen 1",
        "Dozen 2",
        "Dozen 3",
        "Zero",
        "Column 1",
        "Column 2",
        "Column 3",
      ].map((label, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", gap: "10px" }}>
          {/* First column for labels */}
          <div style={{ width: "160px", textAlign: "left", padding: "10px" }}>
            <p className="text-black font-semibold w-full max-md:text-xs max-sm:w-16">
              {label}
            </p>
          </div>
          {/* Grid for circles */}
          {Array.from({ length: maxColumns }).map((_, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className={`${
                  grid[rowIndex][colIndex] === "dozen"
                    ? "bg-red-500"
                    : grid[rowIndex][colIndex] === "column"
                      ? "bg-blue-500"
                      : grid[rowIndex][colIndex] === "zero"
                        ? "bg-green-500"
                        : ""
                } ${grid[rowIndex][colIndex] ? "rounded-full w-8 h-8" : ""}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DozenCol;
