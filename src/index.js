import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Components/Products/productSlice';
import cartReducer from './Components/Cart/cartSlice';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer:{
    products:productReducer,
    cart:cartReducer
  },
})
root.render(
<HashRouter basename='/'>
<Provider store={store} >
    <App  />

</Provider>
</HashRouter >
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
