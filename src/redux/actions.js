export const GET_DATA = 'GET_DATA';


export const getTableDataAC = (data) => ({
  type: GET_DATA,
  payload: data
})

export const showLoaderAC = () => ({
  type: ''
})