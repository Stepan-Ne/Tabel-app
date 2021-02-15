import React from 'react';
import '../Table/table.css';

const AddRowForm = () => {
  return (
    <div className='table-wrapper'>
      <table className='addrowForm'>
        <tr>
          <th>Name</th>
          <th>Contacts</th>
          <th>Address</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' name='firstName' />
            </div>
            <div>
              <label htmlFor='secondName'>Second Name</label>
              <input type='text' name='secondName' />
            </div>
          </td>
          <td>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' />
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input type='text' name='phone' />
            </div>
          </td>
          <td>
          <div>
              <label htmlFor='street'>Street</label>
              <input type='text' name='street' />
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input type='text' name='city' />
            </div>
            <div>
              <label htmlFor='state'>State</label>
              <input type='text' name='state' />
            </div>
            <div>
              <label htmlFor='zip'>Zip</label>
              <input type='text' name='zip' />
            </div>
          </td>
          <td>
          <label htmlFor='description'>Description</label>
              <textarea name='description' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AddRowForm;
