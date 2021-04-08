import React from 'react';
import ReactDOM from 'react-dom';
import Routs from './app/router/Routs';
import 'bulma/css/bulma.min.css';
import './index.css';
import './app/sass/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Routs/>
  </React.StrictMode>,
  document.getElementById('root')
);

