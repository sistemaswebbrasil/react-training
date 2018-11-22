import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import AppRouter from './AppRouter';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Login from './pages/Login';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <AppRouter />
      <Footer />
    </React.Fragment>
  );
}
