import React from 'react';
import Nav from './components/Nav';
import AppRouter from './AppRouter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <AppRouter />
      <Footer />
    </div>
  );
}
