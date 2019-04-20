import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core/';
import { People, Help, Home } from '@material-ui/icons';

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    '&$selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main
    }
  },
  selected: {}
});

class IconLabelTabs extends React.Component {
  state = {
    value: this.props.history.location.pathname
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          replace
          component={NavLink}
          to="/"
          value={'/'}
          classes={{
            root: classes.root,
            selected: classes.selected
          }}
        />
        <BottomNavigationAction
          label="About"
          icon={<Help />}
          replace
          component={NavLink}
          to="/about"
          value={'/about'}
          classes={{
            root: classes.root,
            selected: classes.selected
          }}
        />
        <BottomNavigationAction
          label="Users"
          icon={<People />}
          replace
          component={NavLink}
          to="/users"
          value={'/users'}
          classes={{
            root: classes.root,
            selected: classes.selected
          }}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(withRouter(IconLabelTabs));
