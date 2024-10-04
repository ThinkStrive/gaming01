import React from "react";

const His = ({ historyData }) => {
  let columns = [[]];
  let currentColumn = 0;

  historyData.forEach((data) => {
    console.log("this is data", data);

    if (data.color === "red") {
      if (
        columns[currentColumn].includes("black") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push({ color: "red", num: data.His_num });
    } else if (data.color === "black") {
      if (
        columns[currentColumn].includes("red") ||
        columns[currentColumn].includes("zero")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push({ color: "black", num: data.His_num });
    } else if (data.color === "zero") {
      if (
        columns[currentColumn].includes("red") ||
        columns[currentColumn].includes("black")
      ) {
        columns.push([]);
        currentColumn++;
      }
      columns[currentColumn].push({ color: "zero", num: data.His_num });
    }
  });

  const maxRows = Math.max(...columns.map((col) => col.length));

  return (
    <div className="flex flex-wrap mt-3">
      {Array.from({ length: maxRows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{ width: "50px" }}
          className="last:border-2 last:border-goldenYellow last:rounded-xl last:shadow-xl last:animate-bounce"
        >
          {" "}
          {/* gap: "20px" */}
          {columns.map(
            (col, colIndex) => (
              console.log("row index", col),
              (
                <div
                  key={colIndex}
                  style={{ width: "100%", textAlign: "center" }}
                  className="border-r border-b"
                >
                  <div
                    className={`
                  ${col[rowIndex].color === "red" ? "bg-red-500 rounded-lg" : ""}
                  ${col[rowIndex].color === "black" ? "bg-black rounded-lg" : ""}
                  ${col[rowIndex].color === "zero" ? "bg-green-500 rounded-lg" : ""}
                  text-white py-2
                `}
                  >
                    <p>{col[rowIndex].num}</p>
                  </div>
                </div>
              )
            ),
          )}
        </div>
      ))}
    </div>
  );
};

export default His;

// const His = () => {
//   return <div>His</div>;
// };

// export default His;
