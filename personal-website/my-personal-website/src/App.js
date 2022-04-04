// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/menu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
       <Menu /> 
       <Outlet />
    </div>
    // <Menu />
  );
}

export default App;
