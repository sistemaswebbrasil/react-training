import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import UserMenu from './UserMenu';

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: '10px'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props) {
  const { classes, user, logout } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            component={NavLink}
            to="/"
            replace={true}
          >
            <Home />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            React Training
          </Typography>
          <Nav />
          <UserMenu user={user} logout={logout} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
