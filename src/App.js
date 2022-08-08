import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Users } from './Components/Users';
import { Todos } from './Components/Todos';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products/Products';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Cart } from './Components/Cart/Cart';

function App() {

  


  return (
    <div className="App flex    ">
<Navbar/>
  <Routes>
  <Route path='/' element={<Products/>} />
  <Route path='cart' element={<Cart/>} />

  </Routes>


     
    </div>
  );
}

export default App;
