import { Outlet } from "react-router-dom"
import './App.css'
import Header from './components/Header';

const App = () => {


  return (
    <div>
      <Header />
      <h1>Fake Store</h1>
      <Outlet />      
    </div>
  );
};


export default App
