import { SHOW_SEARCH_FIELD, SHOW_FORM, SHOW_LOADER, HIDE_LOADER } from './actions';

const initState = {
  isSearchField: false,
  loader: false,
  isForm: false
}

const appReducer = (state = initState, action) => {
  switch(action.type) {
case SHOW_SEARCH_FIELD:
  return {
    ...state,
    isSearchField: action.payload
  };
  case SHOW_FORM:
  return {
    ...state,
    isForm: action.payload
  };
  case SHOW_LOADER:
  return {
    ...state,
    loader: true
  };
  case HIDE_LOADER:
  return {
    ...state,
    loader: false
  };

    default:
      return state
  }
}



export default appReducer;