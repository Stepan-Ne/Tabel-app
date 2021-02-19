import './App.css';
import Navbar from './components/Navbar';
import TableContainer from './components/Table/TableContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
     <Provider store={store}>
     <Navbar />
      <h3>Table 1</h3>
      <TableContainer />
     </Provider>
     
    </>
  );
}

export default App;
