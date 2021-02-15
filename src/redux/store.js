import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import tableReducer from './tableReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  tableData: tableReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));

export default store;