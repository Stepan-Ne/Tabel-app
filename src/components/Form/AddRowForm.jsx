import React from 'react';
import '../Table/table.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addRowAC } from '../../redux/actions';


const AddRowForm = () => {

  const dispatch = useDispatch();

const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    description: ''
  },
  onSubmit: (values) => {
    dispatch(addRowAC(values))
    formik.resetForm()
  },
  validate: (values) => {
let errors = {}

Object.keys(values).forEach(k => {
  if (!values[k]) {
    errors.err = 'Error'
  }
})

return errors;
  }
})

// console.log('VAIDATE', formik.errors)

  return (
    <div className='table-wrapper'>

<form id="my_form" onSubmit={formik.handleSubmit}>

      <table className='addrowForm'>
      <tbody>
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
              <input type='text' name='firstName'  onChange={formik.handleChange} value={formik.values.firstName}/>
            </div>
            <div>
              <label htmlFor='secondName'>Last Name</label>
              <input type='text' name='lastName'  onChange={formik.handleChange} value={formik.values.lastName}/>
            </div>
          </td>
          <td>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email'  onChange={formik.handleChange} value={formik.values.email}/>
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input type='tel'  pattern="^[0-9-+\s()]*$" placeholder="(123)123-1234"
              name='phone' onChange={formik.handleChange} value={formik.values.phone}/>
            </div>
          </td>
          <td>
          <div>
              <label htmlFor='street'>Street</label>
              <input type='text' name='street' onChange={formik.handleChange} value={formik.values.street}/>
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input type='text' name='city' onChange={formik.handleChange} value={formik.values.city}/>
            </div>
            <div>
              <label htmlFor='state'>State</label>
              <input type='text' name='state' onChange={formik.handleChange} value={formik.values.state}/>
            </div>
            <div>
              <label htmlFor='zip'>Zip</label>
              <input type='text' pattern="[0-9]{3}[0-9]{3}"
              name='zip' onChange={formik.handleChange} value={formik.values.zip}/>
            </div>
          </td>
          <td>
          <label htmlFor='description'>Description</label>
              <textarea name='description' onChange={formik.handleChange} value={formik.values.description}/>
          </td>
        </tr>
        </tbody>
      </table>

      <button type="submit" disabled={!(formik.isValid && formik.dirty)}>SEND</button>
      </form>
    </div>
  );
};

export default AddRowForm;
