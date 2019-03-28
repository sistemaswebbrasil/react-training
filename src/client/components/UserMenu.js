// import React, { Component } from 'react';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import { withStyles } from '@material-ui/core/styles';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// const styles = theme => ({
//   menuItem: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& $primary, & $icon': {
//         color: theme.palette.common.white
//       }
//     }
//   },
//   primary: { color: theme.palette.common.white },
//   icon: { color: theme.palette.common.white }
// });

// export class UserMenu extends Component {
//   state = {
//     anchorEl: null
//   };

//   handleChange = event => {
//     this.setState({ auth: event.target.checked });
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   handleLogout = () => {
//     this.props.logout();
//   };

//   render() {
//     const { classes, user } = this.props;

//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);
//     return (
//       <div>
//         {user && (
//           <div>
//             <MenuItem
//               className={classes.menuItem}
//               aria-owns={open ? 'menu-appbar' : undefined}
//               aria-haspopup="true"
//               onClick={this.handleMenu}
//               color="inherit"
//             >
//               <ListItemIcon className={classes.icon}>
//                 <AccountCircle />
//               </ListItemIcon>
//               <ListItemText classes={{ primary: classes.primary }} primary={user.name} />
//             </MenuItem>

//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//               open={open}
//               onClose={this.handleClose}
//             >
//               <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
//             </Menu>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(UserMenu);

/*
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import logo from '../globe.svg';

// const styles = {
//   avatar: {
//     margin: 10,
//   },
//   bigAvatar: {
//     margin: 10,
//     width: 60,
//     height: 60,
//   },
// };

function ImageAvatars(props) {
  const { classes } = props;
  return (
    // <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={logo}  style={{ background: "white" }}/>
    // </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImageAvatars;
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import logo from '../globe.svg';
import { Link, ButtonBase } from '@material-ui/core';
import { AuthContext } from '../contexts/AuthContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UserCard from './UserCard';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ButtonBase>
        <Avatar
          alt="Remy Sharp"
          src={logo}
          onClick={this.handleOpen}
          style={{ background: 'white' }}
        />
        </ButtonBase>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>



          <UserCard></UserCard>




          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
