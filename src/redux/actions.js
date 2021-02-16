export const GET_DATA = 'GET_DATA';
export const ADD_ROW = 'ADD_ROW';
export const SHOW_SEARCH_FIELD = 'SHOW_SEARCH_FIELD';
export const SHOW_FORM = 'SHOW_FORM';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';


export const getTableDataAC = (data) => ({
  type: GET_DATA,
  payload: data
})

export const showSearchFieldAC = (isShow) => ({
  type: SHOW_SEARCH_FIELD,
  payload: isShow
})

export const showFormAC = (isShow) => ({
  type: SHOW_FORM,
  payload: isShow
})

export const addRowAC = (row) => ({
  type: ADD_ROW,
  payload: row
})

export const showLoaderAC = () => ({
  type: SHOW_LOADER
})

export const hideLoaderAC = () => ({
  type: HIDE_LOADER
})