import React from 'react';

const CartList = ({ selectedFlatRows }) => {
  return (
    <div>
      <div className='selectedRowList'>
        {selectedFlatRows.map((row) => (
          <div className='selectedRow'>
            <ul>
              <li>
                Выбран пользователь:{' '}
                <b>
                  {row.original.firstName} {row.original.lastName}
                </b>
              </li>
              <li>
                {' '}
                Описание:
                <textarea value={row.original.description}></textarea>
              </li>
              <li>
                Адрес проживания: <b>{row.original.address.streetAddress}</b>
              </li>
              <li>
                Город: <b>{row.original.address.city}</b>
              </li>
              <li>
                Провинция/штат: <b>{row.original.address.state}</b>
              </li>
              <li>
                {' '}
                Индекс: <b>{row.original.address.zip}</b>{' '}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
