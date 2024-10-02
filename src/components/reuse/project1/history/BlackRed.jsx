import React from "react";

const BlackRed = ({ historyData }) => {
  let columns = [[]];
  let currentColumn = 0;

  historyData.forEach((data) => {
    if (data.color === "red") {
      if (
        columns[currentColumn].includes("black") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("red");
    } else if (data.color === "black") {
      if (
        columns[currentColumn].includes("red") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("black");
    } else if (data.color === "zero") {
      if (
        columns[currentColumn].includes("red") ||
        columns[currentColumn].includes("black")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("zero");
    }
  });

  const maxRows = Math.max(...columns.map((col) => col.length));

  return (
    <div>
      {Array.from({ length: maxRows }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {" "}
          {/* gap: "20px" */}
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              style={{ width: "50px", textAlign: "center" }}
              className="border-r border-b"
            >
              <div
                className={`
                  ${col[rowIndex] === "red" ? "bg-red-500 rounded-lg" : ""}
                  ${col[rowIndex] === "black" ? "bg-black rounded-lg" : ""}
                  ${col[rowIndex] === "zero" ? "bg-green-500 rounded-lg" : ""}
                  text-white py-2
                `}
              >
                <p>
                  {col[rowIndex] === "red" ? "R" : ""}
                  {col[rowIndex] === "black" ? "B" : ""}
                  {col[rowIndex] === "zero" ? "Z" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlackRed;
