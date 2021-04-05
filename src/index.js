import React from 'react';
import ReactDOM from 'react-dom';
import Routs from './app/router/Routs';
import './index.css';
import './app/sass/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Routs/>
  </React.StrictMode>,
  document.getElementById('root')
);

