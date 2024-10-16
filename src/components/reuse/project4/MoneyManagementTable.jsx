import React, { useEffect } from "react";

const MoneyManagementTable = ({ moneyManagementData, theme }) => {
  let totalAmt = 0;
  moneyManagementData.map((item) => {
    if (item.total > 0) {
      totalAmt += item.total;
    }
  });

  console.log(totalAmt);

  let duplicateData = [...moneyManagementData].reverse();
  
  return (
    <table
      border="1"
      cellPadding="10"
      cellSpacing="0"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        position: "relative",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <thead>
        <tr>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          >
            Spins
          </th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          >
            Win/Loss
          </th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          >
            Unit
          </th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          >
            Total
          </th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          >
            Covered
          </th>
        </tr>
        <tr>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          ></th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          ></th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          ></th>
          <th
            className={
              theme === "dark"
                ? "border-2 py-1 bg-neonGreen text-black"
                : "border-2 border-black py-1 bg-neonGreen text-black"
            }
          >
            {totalAmt}
          </th>
          <th
            className={
              theme === "dark" ? "border-2 py-1" : "border-2 border-black py-1"
            }
          ></th>
        </tr>
      </thead>
      <tbody>
        {duplicateData.length > 0 ? (
          duplicateData.map((data, index) => (
            <tr key={index}>
              <td
                className={`${data.spin?.color === "red" ? "bg-customRed" : "bg-black"} border p-2 max-sm:p-1 text-center`}
                style={{
                  border:
                    theme === "dark" ? "white solid 2px" : "black solid 2px",
                  color: "white",
                }}
              >
                {data.spin?.number}
              </td>
              <td
                className={`${data.winLoss === "W" ? "bg-green-500" : data.winLoss === 'L' ? "bg-brightRed" : 'bg-transparent'} border p-2 max-sm:p-1 text-center`}
                style={{
                  border:
                    theme === "dark" ? "white solid 2px" : "black solid 2px",
                }}
              >
                {data.winLoss}
              </td>
              <td
                className="border p-2 max-sm:p-1 text-center"
                style={{
                  border:
                    theme === "dark" ? "white solid 2px" : "black solid 2px",
                }}
              >
                {data.unit}
              </td>
              <td
                className={`${data.total > 0 ? "text-green-600" : "text-customRed"} border p-2 max-sm:p-1 text-center`}
                style={{
                  border:
                    theme === "dark" ? "white solid 2px" : "black solid 2px",
                }}
              >
                {data.total}
              </td>
              {/* border p-2 max-sm:p-1 text-center */}
              <td
                className="border p-2 max-sm:p-1 text-center"
                style={{
                  border:
                    theme === "dark" ? "white solid 2px" : "black solid 2px",
                }}
              >
                {data.covered}
              </td>
            </tr>
          ))
        ) : (
          <tr className="absolute top-36 left-[45%] max-sm:left-[35%]">
            <td colSpan="5" className="text-center mt-10">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MoneyManagementTable;
