import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import tableReducer from './tableReducer';
import appReducer from './appReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  tableData: tableReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk),));

export default store;