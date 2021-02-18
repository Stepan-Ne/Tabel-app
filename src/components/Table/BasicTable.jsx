import React, { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from 'react-table';
import { GROUPED_COLUMNS } from './columns';
import './table.css';
import Menu from './Menu';
import Checkbox from './Checkbox';

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
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => {
              console.log('ROW', row);

              return <Checkbox {...row.getToggleRowSelectedProps()} />;
            },
          },
          ...columns,
        ];
      });
    }
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
    selectedFlatRows,
  } = tableInstance;
  const { globalFilter, pageSize, pageIndex } = state;
  console.log('Select Row', selectedFlatRows);
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

        {/* PAGINATION */}
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
            style={{ width: '50px' }}
          />
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected ROW */}
      <div className='selectedRowList'>
        {selectedFlatRows.map((row) => (
          <div className='selectedRow'>
            <ul>
              <li>Выбран пользователь: <b>{row.original.firstName}{' '}
              {row.original.lastName}</b>
              </li>
              <li> Описание:
              <textarea value={row.original.description}></textarea>
              </li>
              <li>Адрес проживания: <b>{row.original.address.streetAddress}</b></li>
              <li>Город: <b>{row.original.address.city}</b></li>
              <li>Провинция/штат: <b>{row.original.address.state}</b></li>
              <li> Индекс: <b>{row.original.address.zip}</b> </li>
            </ul>
            </div>
            
        ))}
      </div>
    </>
  );
};

export default BasicTable;
