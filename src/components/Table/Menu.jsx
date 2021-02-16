import React from 'react';
import TableFilter from './TableFilter';
import { useSelector } from 'react-redux';
import AddRowForm from '../Form/AddRowForm';

 const Menu = ({ filter, setFilter }) => {

  const isSearchField = useSelector((state) => state.app.isSearchField);
  const isForm = useSelector((state) => state.app.isForm);

  return (
    <div>
      { isSearchField
      ? <TableFilter filter={filter} setFilter={setFilter}/>
      : null
      }
      {isForm
      ? <AddRowForm />
      : null
      }
      
      
    </div>
  )
}

export default Menu;