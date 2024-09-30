import React from "react";

const OddEven = ({ historyData }) => {
  let columns = [[]];
  let currentColumn = 0;

  historyData.forEach((data) => {
    if (data.odd_even === "odd") {
      if (
        columns[currentColumn].includes("even") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("odd");
    } else if (data.odd_even === "even") {
      if (
        columns[currentColumn].includes("odd") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push("even");
    } else if (data.odd_even === "zero") {
      if (
        columns[currentColumn].includes("odd") ||
        columns[currentColumn].includes("even")
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
                  ${col[rowIndex] === "odd" ? "bg-blue-500 my-0.5 rounded-lg px-2" : ""}
                  ${col[rowIndex] === "even" ? "bg-red-500 my-0.5 rounded-lg px-2" : ""}
                  ${col[rowIndex] === "zero" ? "bg-green-500 my-0.5 rounded-lg px-2" : ""}
                  text-white py-2
                `}
              >
                <p>
                  {col[rowIndex] === "odd" ? "O" : ""}
                  {col[rowIndex] === "even" ? "E" : ""}
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

export default OddEven;
