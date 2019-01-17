import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

ReactDOM.render(
  <HashRouter>
    <AppRouter />
  </HashRouter>,
  document.getElementById('root')
);
