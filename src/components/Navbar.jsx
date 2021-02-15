import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showSearchFieldAC } from '../redux/actions';


function Navbar() {

  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(showSearchFieldAC(search))
    }, [search]);

  
const onSearchHandler = () => {
   setSearch(!search)
  
}

  return (
    <nav className='navbar'>
    <div className='nav-center'>
      <h3>React Table</h3>
      
      <div>
        {/* <input type="text" className="size-input"/> */}
        <button type='button' className='nav-btn' onClick={onSearchHandler}>Search</button>
      </div>
      <div>
      <button type='button' className='nav-btn' >Add Row</button>
      </div>
    
    </div>
  </nav>
  )
}

export default Navbar;
