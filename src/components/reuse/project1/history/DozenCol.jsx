import React from "react";

const DozenCol = ({ historyData }) => {
  const grid = Array(7)
    .fill(null)
    .map(() => []);

  let currentColumn = 0;

  historyData.forEach((data) => {
    if (data.color === "zero") {
      grid[3][currentColumn] = "zero";
    } else {
      if (data.dozen === "1st") grid[0][currentColumn] = "dozen";
      if (data.dozen === "2nd") grid[1][currentColumn] = "dozen";
      if (data.dozen === "3rd") grid[2][currentColumn] = "dozen";

      if (data.column === "1st") grid[4][currentColumn] = "column";
      if (data.column === "2nd") grid[5][currentColumn] = "column";
      if (data.column === "3rd") grid[6][currentColumn] = "column";
    }
    currentColumn++;
  });

  const maxColumns = Math.max(...grid.map((row) => row.length));

  return (
    <div>
      {[
        "Dozen 1",
        "Dozen 2",
        "Dozen 3",
        "Zero",
        "Column 1",
        "Column 2",
        "Column 3",
      ].map((label, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", gap: "5px" }}>
          <div
            style={{
              width: "120px", 
              textAlign: "left",
              padding: "5px 10px", 
            }}
          >
            <p className="text-white font-semibold w-full max-md:text-xs max-sm:w-16">
              {label}
            </p>
          </div>
         
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
