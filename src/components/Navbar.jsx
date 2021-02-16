import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showSearchFieldAC, showFormAC } from '../redux/actions';

function Navbar() {
  const [state, setState] = useState({
    search: false,
    addRow: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSearchFieldAC(state.search));
  }, [state.search]);
  useEffect(() => {
    dispatch(showFormAC(state.addRow));
  }, [state.addRow]);

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
          {/* <input type="text" className="size-input"/> */}
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
      </div>
    </nav>
  );
}

export default Navbar;
