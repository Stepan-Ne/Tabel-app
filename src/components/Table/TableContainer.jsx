import React, { useEffect } from 'react';
import BasicTable from './BasicTable';
import Loader from '../utils/Loader';
import { connect } from 'react-redux';

const TableContainer = ({ tableData, loader }) => {
  return (
    <>
      {loader ? (
        <div className='centerPosition'>
          <Loader />
        </div>
      ) : (
        <BasicTable tableData={tableData} />
      )}
    </>
  );
};

const mapState = (state) => ({
  loader: state.app.loader,
  tableData: state.tableData.table,
});

export default connect(mapState, null)(TableContainer);
