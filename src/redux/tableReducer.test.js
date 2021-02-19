import tableReducer from './tableReducer';
import { addRowAC } from './actions';

it('The new row should be added', () => {

  // test data
let newRowData = {
  id: 1001,
  firstName: "Bob",
  lastName: "Marley"
}
const initState = {
  table: [],
};

let action = addRowAC(newRowData)

// action
  let newState = tableReducer(initState, action);

  // expectation
  expect(newState.table.length).toBe(1);
  expect(newState.table[0].firstName).toBe("Bob");
})

