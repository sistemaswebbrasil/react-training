import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Nav = props => (
  <div>
    {!props.user && (
      <Button replace component={NavLink} to="/login" color="inherit">
        Login
      </Button>
    )}
    <Button replace component={NavLink} to="/about" color="inherit">
      About
    </Button>
    <Button replace component={NavLink} to="/users" color="inherit">
      Users
    </Button>
  </div>
);

export default Nav;
