import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import Header from './components/Header';
import './app.css';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <div className="App Site">
      <div className="Site-content">
        <div className="App-header">
          <Header />
        </div>
        <div className="main">
          <AppRouter />
        </div>
      </div>
      <Footer />
    </div>
  </React.Fragment>
);

export default App;
