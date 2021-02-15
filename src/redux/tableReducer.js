import { GET_DATA } from './actions';
import { getTableDataAC } from './actions';

const initState = {
table: []
} 

const tableReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_DATA: 
    return {
      ...state,
      table: action.payload
    }

    default:
      return state;
  }
}

// Thunk
export const fetchData = () => {
  return async (dispatch) => {
  //debugger
  try {
    const data = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');

    const response = await data.json();
    dispatch(getTableDataAC(response));

  } catch(error) {
throw error
  }
}
}

export default tableReducer;