export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      }
    ],
  },
  {
    Header: 'Contacts',
    columns: [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      }
    ],
  },
  {
    Header: 'Address',
    columns: [
      {
      Header: 'Street',
      accessor: 'address.streetAddress'
    },
    {
      Header: 'City',
      accessor: 'address.city'
    },
    {
      Header: 'State',
      accessor: 'address.state'
    },
    {
      Header: 'Zip',
      accessor: 'address.zip'
    },

  ],
  },
  {
    Header: 'Description',
   accessor: 'description'
  },
];
