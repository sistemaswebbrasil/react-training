import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import Header from './components/Header';
import './app.css';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <div className="container">
      <AppRouter />
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
