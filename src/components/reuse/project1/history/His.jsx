import React from "react";

const His = ({ historyData }) => {
  let columns = [[]];
 
  // Group the historyData by colors
  historyData.forEach((data) => {
    if (data.color === "red") {
      if (columns[columns.length - 1].includes("black") || columns[columns.length - 1].includes("zero")) {
        columns.push([]);
      }
      columns[columns.length - 1].push({ color: "red", num: data.His_num });
    } else if (data.color === "black") {
      if (columns[columns.length - 1].includes("red") || columns[columns.length - 1].includes("zero")) {
        columns.push([]);
      }
      columns[columns.length - 1].push({ color: "black", num: data.His_num });
    } else if (data.color === "zero") {
      if (columns[columns.length - 1].includes("red") || columns[columns.length - 1].includes("black")) {
        columns.push([]);
      }
      columns[columns.length - 1].push({ color: "zero", num: data.His_num });
    }
  });

  // Find the maximum number of items in a column to set up the row count
  const maxRows = Math.max(...columns.map((col) => col.length));

  return (
    <div className="flex flex-wrap mt-3 gap-2">
      {/* Render all columns in a continuous row */}
      {Array.from({ length: maxRows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", gap: "10px" }} // Adding gap to space out items properly
        >
          {columns.map((col, colIndex) => (
            <div className="w-9 md:w-10 text-center"
              key={colIndex}
            >
              {/* Only render the current row item if it exists */}
              {col[rowIndex] && (
                <div
                  className={`
                    ${col[rowIndex].color === "red" ? "bg-red-500 rounded-lg" : ""}
                    ${col[rowIndex].color === "black" ? "bg-black rounded-lg" : ""}
                    ${col[rowIndex].color === "zero" ? "bg-green-500 rounded-lg" : ""}
                    text-white py-2
                    ${rowIndex === maxRows - 1 ? "animate-bounce" : ""} 
                    ${rowIndex === maxRows - 1 && colIndex === columns.length - 1 ? "border-2 border-goldenYellow rounded-xl shadow-xl" : ""}
                  `}
                >
                  <p>{col[rowIndex].num}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default His;
