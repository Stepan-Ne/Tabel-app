import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { GROUPED_COLUMNS } from './columns';
import './table.css';

 const BasicTable = ({ tableData }) => {
   
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="table-wrapper">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;