import React, {useEffect} from 'react';
import BasicTable from './BasicTable';
import { fetchData } from '../../redux/tableReducer';
import { connect } from 'react-redux';


 const TableContainer = ({ tableData, fetchData }) => {
  useEffect(() => {
  
    fetchData();
  }, [])

  return (
    <>
      <BasicTable tableData={tableData}/>
    </>
  )
};

const mapState = (state) => ({
  
  tableData: state.tableData.table
})

export default connect(mapState, {fetchData})(TableContainer);
