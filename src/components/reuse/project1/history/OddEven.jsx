import React from "react";

const OddEven = ({ historyData }) => {
  
  let columns = [];
  let currentColumn = -1;
 
  historyData.forEach((data) => {
    const lastOddEvenInColumn =
      currentColumn >= 0
        ? columns[currentColumn][columns[currentColumn].length - 1]
        : null;

    if (currentColumn === -1 || data.odd_even !== lastOddEvenInColumn) {
     
      columns.push([]);
      currentColumn++;
    }


    columns[currentColumn].push(data.odd_even);
  });

  const maxRows = Math.max(...columns.map((col) => col.length));

  
  return (
    <div
      style={{
        overflowX: "auto", 
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-block",
          margin: "0 auto", 
        }}
      >
        {Array.from({ length: maxRows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "start", 
            }}
          >
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                style={{
                  textAlign: "center",
                  width: "46px", 
                  height: "46px", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               
                {col[rowIndex] ? (
                  <div
                    className={`${
                      col[rowIndex] === "odd" ? "bg-blue-500" : ""
                    } ${col[rowIndex] === "even" ? "bg-red-500" : ""} ${
                      col[rowIndex] === "zero" ? "bg-green-500" : ""
                    } text-white py-2 rounded-lg`}
                    style={{
                      padding: ".5rem 1rem",
                      minWidth: "30px",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      {col[rowIndex] === "odd" ? "O" : ""}
                      {col[rowIndex] === "even" ? "E" : ""}
                      {col[rowIndex] === "zero" ? "Z" : ""}
                    </p>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "46px", 
                      height: "46px", 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Empty placeholder */}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OddEven;
