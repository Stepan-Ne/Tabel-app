import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showSearchFieldAC, showFormAC } from '../redux/actions';
import { fetchData } from '../redux/tableReducer';
import { connect } from 'react-redux';

function Navbar({ fetchData }) {
  const [state, setState] = useState({
    search: false,
    addRow: false,
    isBigData: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSearchFieldAC(state.search));
  }, [state.search]);
  useEffect(() => {
    dispatch(showFormAC(state.addRow));
  }, [state.addRow]);
  useEffect(() => {
    fetchData(state.isBigData);
  }, [state.isBigData]);

  const onClickHandler = (e) => {
    setState({
      [e.target.name]: !state[e.target.name],
    });
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <h3>React Table</h3>

        <div>
         
          <button
            type='button'
            name='search'
            className='nav-btn'
            onClick={onClickHandler}
          >
            Search
          </button>
        </div>
        <div>
          <button
            type='button'
            name='addRow'
            className='nav-btn'
            onClick={onClickHandler}
          >
            Add Row
          </button>
        </div>
        <div>
          <button
            type='button'
            name='isBigData'
            className='nav-btn'
            onClick={onClickHandler}
            disabled={state.isBigData}
          >
            Large
          </button>
        </div>
        <div>
          <button
            type='button'
            name='isBigData'
            className='nav-btn'
            onClick={onClickHandler}
            disabled={!state.isBigData}
          >
            Small
          </button>
        </div>
      </div>
    </nav>
  );
}

export default connect(null, { fetchData })(Navbar);
