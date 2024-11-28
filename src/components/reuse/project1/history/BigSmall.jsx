import React from "react";

const BigSmall = ({ historyData }) => {
 
  let columns = [];
  let currentColumn = -1; 
  
  historyData.forEach((data) => {
    const lastSizeInColumn =
      currentColumn >= 0
        ? columns[currentColumn][columns[currentColumn].length - 1]
        : null;

    if (currentColumn === -1 || data.size !== lastSizeInColumn) {
      
      columns.push([]);
      currentColumn++;
    }

    
    columns[currentColumn].push(data.size);
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
                      col[rowIndex] === "large" ? "bg-red-500" : ""
                    } ${col[rowIndex] === "small" ? "bg-blue-500" : ""} ${
                      col[rowIndex] === "zero" ? "bg-green-500" : ""
                    } text-white py-2 rounded-lg`}
                    style={{
                      padding: ".5rem 1rem",
                      minWidth: "30px",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      {col[rowIndex] === "large" ? "B" : ""}
                      {col[rowIndex] === "small" ? "S" : ""}
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

export default BigSmall;
