import React from 'react';

function Table({ data, deleteItem, editItem }) {
  let headers;
  const renderTableHeader = () => {
    headers = Object.keys(data[0]);
    return headers.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return data.map((row) => {
      // const { ...header } = row;

      return (
        <tr>
          {headers.map((header, index) => (
            <td key={index}>{row[header]}</td>
          ))}
          <td>
            <p onClick={() => deleteItem(row.id)}>Delete</p>
            <p onClick={() => editItem(row)}>Edit</p>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className='table'>
      <tbody>
        <tr>
          {data && renderTableHeader()}
          <th>{'Manage'.toUpperCase()}</th>
        </tr>
        {data && renderTableData()}
      </tbody>
    </table>
  );
}

export default Table;
