import React from 'react';
import TableFilter from './TableFilter';
import { useSelector } from 'react-redux';
import AddRowForm from '../Form/AddRowForm';

 const Menu = ({ filter, setFilter }) => {

  const isSearchField = useSelector((state) => state.app.isSearchField);

  return (
    <div>
      { isSearchField
      ? <TableFilter filter={filter} setFilter={setFilter}/>
      : null
      }
      <AddRowForm />
      
    </div>
  )
}

export default Menu;