import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import withRoot from '../withRoot';
import Nav from './Nav';

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
  const { classes } = props;
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
          >
            <Home />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            React Training
          </Typography>
          <Nav />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.shape({})
};

Header.defaultProps = {
  classes: 'foo'
};

export default withRoot(withStyles(styles)(Header));
