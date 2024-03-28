import { useState } from 'react'
import { Outlet } from "react-router-dom"
// import PropTypes from 'prop-types';
import './App.css'
import Navbar from './components/Navbar';

const App = () => {
  const [heading, setHeading] = useState("Odin Project - Shopping Cart App");

  const clickHandler = () => {
    setHeading("Olly's Shopping Cart App");
  };

  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>{heading}</h1>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </div>
  );
};


export default App
