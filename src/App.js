import './App.css';
import Navbar from './components/Navbar';
import { BasicTable } from './components/BasicTable';

function App() {
  return (
    <>
      <Navbar />
      <h3>Table 1</h3>
      <BasicTable />
    </>
  );
}

export default App;
