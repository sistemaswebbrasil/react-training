import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Login from './pages/Login';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/login/" exact component={Login} />
    </div>
  </Router>
);

export default AppRouter;
