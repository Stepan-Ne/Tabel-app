export const GET_DATA = 'GET_DATA';
export const ADD_ROW = 'ADD_ROW';
export const SHOW_SEARCH_FIELD = 'SHOW_SEARCH_FIELD';


export const getTableDataAC = (data) => ({
  type: GET_DATA,
  payload: data
})

export const showLoaderAC = () => ({
  type: ''
})

export const showSearchFieldAC = (isShow) => ({
  type: SHOW_SEARCH_FIELD,
  payload: isShow
})

export const addRowAC = (row) => ({
  type: ADD_ROW,
  payload: row
})