import { SHOW_SEARCH_FIELD } from './actions';

const initState = {
  isSearchField: false,
  isLoader: false,
  isAddRow: false
}

const appReducer = (state = initState, action) => {
  switch(action.type) {
case SHOW_SEARCH_FIELD:
  return {
    ...state,
    isSearchField: action.payload
  }

    default:
      return state
  }
}



export default appReducer;