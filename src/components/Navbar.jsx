import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='nav-center'>
      <h3>React Table</h3>
      
      <div>
        <input type="text" className="size-input"/>
        <button type='button' className='nav-btn'>Search</button>
      </div>
      <div>
      <button type='button' className='nav-btn' >Add Row</button>
      </div>
    
    </div>
  </nav>
  )
}

export default Navbar;
