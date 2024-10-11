import React, { useEffect } from 'react';

const MoneyManagementTable = ({ moneyManagementData }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Spin</th>
          <th>Win/Loss</th>
          <th>Unit</th>
          <th>Total</th>
          <th>Covered</th>
        </tr>
      </thead>
      <tbody>
        {moneyManagementData.reverse().length > 0 ? (
          moneyManagementData.map((data, index) => (
            <tr key={index}>
              <td className={`${data.spin?.color === 'red' ? 'bg-red-500' : 'bg-black'}`} >{data.spin?.number}</td>
              <td className={`${data.winLoss === 'W' ? 'bg-green-500' : 'bg-red-500'}`} >{data.winLoss}</td>
              <td>{data.unit}</td>
              <td>{data.total}</td>
              <td>{data.covered}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MoneyManagementTable;
