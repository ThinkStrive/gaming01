import React from "react";

const BigSmall = ({ historyData }) => {
  let columns = [[]];
  let currentColumn = 0;

  historyData.forEach((data) => {
    if (data.size === "large") {
      if (
        columns[currentColumn].includes("small") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("large");
    } else if (data.size === "small") {
      if (
        columns[currentColumn].includes("large") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("small");
    } else if (data.size === "zero") {
      if (
        columns[currentColumn].includes("large") ||
        columns[currentColumn].includes("small")
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
        <div key={rowIndex} style={{ display: "flex", gap: "1px" }}>
          {columns.map((col, colIndex) => (
            <div key={colIndex} style={{ width: "50px", textAlign: "center" }}>
              <div
                className={`
                  ${col[rowIndex] === "large" ? "bg-red-500 rounded-lg my-1 px-1" : ""}
                  ${col[rowIndex] === "small" ? "bg-blue-500 rounded-lg my-1 px-1" : ""}
                  ${col[rowIndex] === "zero" ? "bg-green-500 rounded-lg my-1 px-1" : ""}
                  text-white py-2
                `}
              >
                <p>
                  {col[rowIndex] === "large" ? "B" : ""}
                  {col[rowIndex] === "small" ? "S" : ""}
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

export default BigSmall;
