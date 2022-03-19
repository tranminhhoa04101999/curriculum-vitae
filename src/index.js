import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/grid.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/curriculum-vitae">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
