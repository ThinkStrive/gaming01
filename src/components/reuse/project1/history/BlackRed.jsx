import React from "react";

const BlackRed = ({ historyData }) => {
  let columns = [];
  let currentColumn = -1; 

 
  historyData.forEach((data) => {
    
    if (
      currentColumn === -1 || 
      data.color !== columns[currentColumn][columns[currentColumn].length - 1]
    ) {
      columns.push([]);
      currentColumn++;
    }

   
    columns[currentColumn].push(data.color);
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
                      col[rowIndex] === "red"
                        ? "bg-red-500 my-0.5 rounded-lg"
                        : ""
                    } ${
                      col[rowIndex] === "black"
                        ? "bg-black my-0.5 rounded-lg"
                        : ""
                    } ${
                      col[rowIndex] === "zero"
                        ? "bg-green-500 my-0.5 rounded-lg"
                        : ""
                    } text-white`}
                    style={{
                      padding: ".5rem 1rem",
                      minWidth: "30px",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      {col[rowIndex] === "red" ? "R" : ""}
                      {col[rowIndex] === "black" ? "B" : ""}
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

export default BlackRed;
