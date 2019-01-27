import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: { color: theme.palette.common.white },
  icon: { color: theme.palette.common.white }
});

export class UserMenu extends Component {
  state = {
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { classes, user } = this.props;

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        {user && (
          <div>
            <MenuItem
              className={classes.menuItem}
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <ListItemIcon className={classes.icon}>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} primary={user.name} />
            </MenuItem>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(UserMenu);
