import React from 'react';

function Table({ data, deleteItem, editItem }) {
  let headers;
  const renderTableHeader = () => {
    headers = Object.keys(data[0]);
    return headers.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const convertType = (value) => {
    if (Array.isArray(value)) {
      return value.map((arr) => arr.label).toString();
    }
    if (typeof value !== 'boolean') return value;
    return value ? 'Yes' : 'No';
  };

  const renderTableData = () => {
    return data.map((row, index) => {
      return (
        <tr key={index}>
          {headers.map((header, index) => {
            return <td key={index}>{convertType(row[header])}</td>;
          })}
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
