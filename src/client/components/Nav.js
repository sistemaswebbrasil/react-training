import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Nav = () => (
  <div>
    <Button component={NavLink} to="/login" color="inherit">
      Login
    </Button>
    <Button component={NavLink} to="/about" color="inherit">
      About
    </Button>
    <Button component={NavLink} to="/users" color="inherit">
      Users
    </Button>
  </div>
);

export default Nav;
