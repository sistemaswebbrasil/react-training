import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Help from '@material-ui/icons/Help';
import People from '@material-ui/icons/People';

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
    value: null
  };

  handleChange = () => {
    this.setState({
      value: this.props.history.location.pathname
    });
  };

  componentWillMount() {
    this.setState({
      value: this.props.history.location.pathname
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <MuiBottomNavigation
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
      </MuiBottomNavigation>
    );
  }
}

export default withStyles(styles)(withRouter(IconLabelTabs));
