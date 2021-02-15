import React from 'react'

 const TableFilter = ({ filter, setFilter }) => {
  return (
    <div>
      Search:
       <input type="text" className="size-input" 
       value={filter || ''}
       onChange={e => setFilter(e.target.value)}/>
    </div>
  )
}

export default TableFilter;
