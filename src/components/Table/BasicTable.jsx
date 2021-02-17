import React, { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { GROUPED_COLUMNS } from './columns';
import './table.css';
import Menu from './Menu';

const BasicTable = ({ tableData }) => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter, pageSize, pageIndex } = state;
  
  return (
    <>
      <Menu filter={globalFilter} setFilter={setGlobalFilter} />

      <div className='table-wrapper'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getFooterGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className='centerPosition'>
          <span>
            Page:{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
            <span>{'| |'}</span>
          </span>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>

          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>

          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>

        <div className='centerPosition'>
            Go to Page:
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{width: '50px'}}
            />
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
              {
                [5, 10, 25, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))
              }
            </select>
          </div>
      </div>
    </>
  );
};

export default BasicTable;
