import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost/ongsho/public/api/';
axios.defaults.headers.common['Authorization'] = 'bearer '+localStorage.getItem('o_sho_auth_token_xyz');
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
